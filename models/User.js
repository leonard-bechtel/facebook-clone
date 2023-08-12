const mongoose = require("mongoose");

// Creating the schema
const userSchema = mongoose.Schema({})

// Creating and exporting the model
module.exports = mongoose.model("User", userSchema)