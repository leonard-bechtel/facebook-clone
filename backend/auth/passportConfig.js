// Configuration file for the passport instance inside app.js

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { comparePasswords } = require("./helpers");
const User = require("../models/User");

// Implement the local strategy for authenticating users using a username and a password
const localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
    const user = await User.findOne({ username })
    // Check if the user exists
    if (!user) return done(null, false)
    if (user) {
      // Check if passwords match
      if (await comparePasswords(password, user.salt, user.hashedPassword)) {
        return done(null, user)
      } else {
        return done(null, false)
      }
    }
  } catch (err) {
    console.log(`Couldn't authenticate user. Error: ${err}`)
    return done(err)
  }
})

// Using the local strategy as middleware inside the passport instance
passport.use(localStrategy)

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id)
    done(null, user)
  } catch (err) {
    done(err)
  }
})

module.exports = passport;
