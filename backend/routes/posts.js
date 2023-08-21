const express = require("express");

const router = express.Router()

router.get("/", (req, res) => {
  console.log("Get all posts")
})

module.exports = router;