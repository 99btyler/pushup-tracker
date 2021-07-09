const express = require("express")
const mongoose = require("mongoose")

require("dotenv/config")

const app = express()
const port = process.env.PORT || 5000

// Middlewares
app.use(express.json())

// Routes
const goalTrackerItemRouter = require("./routes/GoalTrackerItem.js")
app.use("/goaltrackeritem", goalTrackerItemRouter)

// Server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))

// Backend
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database connection established!"))