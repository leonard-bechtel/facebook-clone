const express = require("express");
const Post = require("../models/Post");

const router = express.Router()

// Get all posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find()
    res.status(200).json({
      msg: "Fetching post data was a success",
      posts: posts
    })
  } catch (err) {
    console.log(err)
  }
})

// Create new post
router.post("/", async (req, res) => {
  try {
    const newPost = await Post.create({
      username: req.body.username,
      content: req.body.content
    })

    if (await newPost.save()) {
      res.status(201).json({
        msg: "Post was successfully created"
      })
    } else {
      res.status(500).json({
        msg: "Something went wrong, couldn't create post"
      })
    }
  } catch (err) {
    console.log(err)
  }
})

// TODO: implement route to get all posts of friends; filtering on the backend


// Get, update, delete post by id
router
  .route("/:id")
  .get(async (req, res) => {
    try {
      const post = await Post.findById(id)
      console.log(post)
    } catch(err) {
      console.log(err)
    }
  })
  .post(async (req, res) => {
    try {
      const post = await Post.findById(id)
      console.log(post)
    } catch(err) {
      console.log(err)
    }
  })
  .delete(async (req, res) => {
    try {
      const post = await Post.findById(id)
      console.log(post)
    } catch(err) {
      console.log(err)
    }
  })


module.exports = router;