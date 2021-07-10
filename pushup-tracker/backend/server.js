const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

require("dotenv/config")

const app = express()
const port = 5000

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
const goalSetterRouter = require("./routes/GoalSetterRouter.js")
app.use("/goalsetter", goalSetterRouter)

const goalTrackerItemRouter = require("./routes/GoalTrackerItemRouter.js")
app.use("/goaltrackeritem", goalTrackerItemRouter)

// Server
app.listen(port, () => console.log(`Server is listening on port ${port}!`))

// Backend
mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Database connection established!"))