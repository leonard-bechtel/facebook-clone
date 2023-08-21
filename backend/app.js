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
  methods: "GET, POST, DELETE",
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
    maxAge: 1000 * 60 * 60 * 24, // Equals 1 day (1 day * 24 hr/1 day * 60 min/1 hr * 60 sec/1 min * 1000 ms / 1 sec)
    // TODO: configure SameSite property of cookie
}
}))
app.use(passport.initialize())
app.use(passport.session())

// ---------- Routes ---------- //
const userRouter = require("./routes/users");
app.use("/users", userRouter)

const postRouter = require("./routes/posts");
app.use("/posts", postRouter)

// Route for testing session
// TODO: Delete this code block when it is no longer needed
app.get("/test/session", isAuth, (req, res) => {
  if (req.session.counter === undefined) { req.session.counter = 0}
  req.session.counter += 1
  console.log(req.session)
  res.json({ counter: req.session.counter })
})

// ---------- Starting the server ---------- //
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})