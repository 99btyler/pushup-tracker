const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
const usersRouter = require("./routes/UsersRouter.js")
app.use("/users", usersRouter)

// Server
app.listen(5000, () => console.log("Server is listening on port 5000!"))

// Backend
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database connection established!"))