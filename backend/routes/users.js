const express = require("express");
const User = require("../models/User");
const { generateSalt, generateHashedPassword } = require("../auth/utils");

const router = express.Router()

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({})
    console.log("~~~~~~~~~~ CURRENT USERS IN DB ~~~~~~~~~~")
    for (const user of users) {
      console.log(`username: ${user.username}`)
    }
    console.log("~~~~~~~~~~ ~~~~~~~~~~ ~~~~~~~~~~ ~~~~~~~~~~")
    console.log("req.user: ", req.user)
    //res.status(200).json(users)
  } catch (err) {
    res.status(400).json({ msg: "Couldn't find any users" })
    console.log(err)
  }
})



// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, firstname, lastname } = req.body
    // Check if all necessary information was provided
    if (username && email && password && firstname && lastname) {
      // Check if user already exists
      const user = await User.findOne({ username: req.body.username })
      if (user) {
        res.status(400).json({ msg: `User with username ${req.body.username} already exists` })
        return // TODO: Check if this return is necessary
      }
      // If user doesn't already exists create a new one
      const salt = generateSalt(16)
      const hashedPassword = await generateHashedPassword(req.body.password, salt)
      const newUser = await User.create({
        username,
        email,
        salt,
        hashedPassword,
        firstname,
        lastname
      })
      await newUser.save()
      res.status(201).json({ msg: "User was created successfully" })
    } else {
      res.status(400).json({ msg: "Please provide username, password, email, firstname and lastname" })
    }
  } catch (err) {
    res.status(500).json({ msg: "Couldn't create user" })
    console.log(err)
  }
})

// Get/update/delete user by id
router
  .route("/:id") 
  .get((req, res) => {
    console.log(`get user with id: ${req.params.id}`)
  })
  .post((req, res) => {
    console.log(`update user with id: ${req.params.id}`)
  })
  .delete((req, res) => {
    console.log(`delete user with id: ${req.params.id}`)
  })

module.exports = router;

