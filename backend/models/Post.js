const mongoose = require("mongoose");

// TODO: Finish post schema
// TODO: Implement comment schema
const postSchema = mongoose.Schema({
  username: String,
  content: String
})

module.exports = mongoose.model("Post", postSchema);