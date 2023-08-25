const express = require("express");
const passport = require("../auth/passportConfig");

const router = express.Router()

// Login
// router.post("/login", (req, res, next) => {
//   passport.authenticate("local", (err, user, info) => {
//     if (err) {
//       return next(err)
//     }
//     if (!user) {
//       res.status(401).json({ 
//         msg: "Bad credentials",
//         isAuthenticated: false
//       })
//     }
//     req.logIn(user, (err) => {
//       if (err) {
//         return next(err)
//       }
//       res.status(200).json({ 
//         msg: "User was successfully authenticated",
//         isAuthenticated: true
//       })
//     })
//   })(req, res, next)
// })

router.get("/get-login-status", (req, res) => {
  if (req.user !== undefined) {
    res.status(200).json({ 
      msg: "User is still logged in", 
      isAuthenticated: true
    })
  } else {
    res.status(400).json({ 
      msg: "No user is currently logged in!", 
      isAuthenticated: false
    })
  }
})

router.post("/login", passport.authenticate("local"), (req, res) => {
  if (req.isAuthenticated()) {
    console.log("user: ", req.user)
    res.status(200).json({ user: req.user })
  } else {
    res.status(400).json({ msg: "Authentication failed" })
  }
})

router.post("/logout", (req, res, next) => {
  req.logout(err => {
    if (err) { return next(err) }
    else {
      console.log("Logged user out")
      res.status(200).json({ msg: "Logged user out" })
    }
  })
})

// TODO: Delete the following route when no longer needed
router.get("/verifySessionId", (req, res) => {
  console.log(req.isAuthenticated())
  if (req.user !== undefined) {
    console.log("USER IS DEFINED")
    console.log("Cookies", req.cookies)
    console.log("User", req.user)
    console.log("Session", req.session)
    res.json({ msg: "Everything is alright" })
  } else {
    console.log("USER IS UNDEFINED")
    res.json({ msg: "User is UNDEFINED!" })
  }
})

module.exports = router;