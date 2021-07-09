const router = require("express").Router()

const GoalTrackerItem = require("../models/GoalTrackerItem.js")

// GET
router.get("/", (request, response) => {
    GoalTrackerItem.find().then(data => response.json(data)).catch(error => response.status(400).json("Error: " + error))
})

// POST
router.post("/add", (request, response) => {
    const newGoalTrackerItem = new GoalTrackerItem({
        day: request.body.day,
        amount: Number(request.body.amount)
    })
    newGoalTrackerItem.save().then(newData => response.json(newData)).catch(error => response.status(400).json("Error: " + error))
})

// DELETE
router.delete("/:id", (request, response) => {
    GoalTrackerItem.findByIdAndDelete(request.params.id).then(() => response.json(`GoalTrackerItem ${request.params.id} deleted`)).catch(error => response.status(400).json("Error: " + error))
})

module.exports = router