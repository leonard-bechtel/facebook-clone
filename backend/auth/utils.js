const crypto = require("crypto");
const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '.env') });

// Implements helper functions for generating and validating passwords

function generateSalt(saltLength) {
  return crypto.randomBytes(saltLength).toString('hex')
}

async function generateHashedPassword(password, salt) {
  return new Promise((resolve, reject) => {
    const iterations = 100000 // Number of iterations
    const keyLength = 64 // Desired key length in bytes
    crypto.pbkdf2(password, salt, iterations, keyLength, 'sha512', (err, derivedKey) => {
      if (err) reject(err)
      const hashedPassword = derivedKey.toString('hex')
      resolve(hashedPassword)
    })
  })
}


async function comparePasswords(password, salt, hashedPassword) {
  try {
    const newHashedPassword = await generateHashedPassword(password, salt)
    return (newHashedPassword === hashedPassword) ? true : false
  } catch (err) {
    return err
  }
}

// Some helper functions to generate a client-side session id to persist the login status

const encryptionSecret = process.env.ENCRYPTION_SECRET
const iv = crypto.randomBytes(16) // Initialization Vector, a random value

function makeId(length) {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_%&$?!'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

function encryptId(id) {
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionSecret), iv)
  let encrypted = cipher.update(id, 'utf-8', 'hex')
  encrypted += cipher.final('hex')
  return `${iv.toString('hex')}:${encrypted}`
}

function decryptId(encryptedId) {
  const [ivHex, encryptedData] = encryptedId.split(':')
  const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(encryptionSecret), Buffer.from(ivHex, 'hex'))
  let decrypted = decipher.update(encryptedData, 'hex', 'utf-8')
  decrypted += decipher.final('utf-8')
  return decrypted
}

module.exports = {
  generateSalt,
  generateHashedPassword,
  comparePasswords,
  makeId,
  encryptId,
  decryptId
}