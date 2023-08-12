require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./User"); // import the user model

// Connect to database and handle unexpected errors
const dbConnectionString = process.env.DATABASE_CONNECTION_STRING
async function connectToDatabase() {
  try {
    await mongoose.connect(dbConnectionString);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

connectToDatabase();

// Setting up middleware
app.use(cors())
app.use(express.urlencoded())

// Routes
const userRouter = require("./routes/users");
app.use("/users", userRouter)

const postRouter = require("./routes/posts");
app.use("/posts", postRouter)

// Starting server
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})