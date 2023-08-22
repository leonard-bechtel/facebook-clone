// Implements helper functions for generating and validating passwords

const crypto = require("crypto");

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

module.exports = {
  generateSalt,
  generateHashedPassword,
  comparePasswords
}