const mongoose = require("mongoose");

// TODO: Update user model: contacts, posts, comments, downvotes, upvotes, profile info (content, hobiies, interests, music, books, ...), ...
const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  salt: {
    type: String,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  age: Number,
  address: String,
  hobbies: String // TODO: Array[String]
})

module.exports = mongoose.model("User", userSchema);
