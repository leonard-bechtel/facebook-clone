const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const passport = require("./auth/passportConfig");
const { isAuth } = require("./auth/middleware");

const app = express()

// ---------- Loading environment variables ---------- //
require("dotenv").config()
const port = process.env.PORT
const dbConnectionString = process.env.DATABASE_CONNECTION_STRING
const sessionSecret = process.env.SESSION_SECRET

// ---------- Connecting to database ---------- //
async function connectToDatabase() {
  try {
    await mongoose.connect(dbConnectionString)
    console.log("Connected to MongoDB")
  } catch (err) {
    console.error("Error connecting to MongoDB:", err)
  }
}

connectToDatabase()

// ---------- Middleware ---------- //
app.use(cors({
  origin: "http://localhost:3000",
  // methods: "GET, POST, DELETE",
  credentials: true
}))
app.use(express.urlencoded())
app.use(express.json())
app.use(session({
  secret: sessionSecret,
  saveUninitialized: true,
  resave: false,
  store: MongoStore.create({ mongoUrl: dbConnectionString, collection: 'sessions' }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
  }
}))
app.use(passport.initialize())
app.use(passport.session())

// ---------- Routes ---------- //
const authRouter = require("./routes/auth");
app.use("/auth", authRouter)

const userRouter = require("./routes/users");
app.use("/users", userRouter)

const postRouter = require("./routes/posts");
app.use("/posts", postRouter)

// Session test route TODO: delete this route when no longer neede
app.get("/session", (req, res) => {
  console.log("REQ.SESSION: ", req.session)
})

// ---------- Starting the server ---------- //
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})