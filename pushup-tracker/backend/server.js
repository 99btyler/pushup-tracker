const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")

const app = express()
const port = 5000

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
const goals = require("./routes/Goals.js")
app.use("/goals", goals)


// Server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))

// Backend
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database connection established!"))