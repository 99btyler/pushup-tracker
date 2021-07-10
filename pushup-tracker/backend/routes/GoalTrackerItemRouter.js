const router = require("express").Router()

const GoalTrackerItemSchema = require("../models/GoalTrackerItemSchema.js")

// GET
router.get("/", (request, response) => {

    GoalTrackerItemSchema.find().then(data => response.json(data)).catch(error => response.status(400).json("Error: " + error))

})

// POST
router.post("/add", (request, response) => {

    const newGoalTrackerItemSchema = new GoalTrackerItemSchema({
        day: request.body.day,
        amount: Number(request.body.amount)
    })

    newGoalTrackerItemSchema.save().then(newData => response.json(newData)).catch(error => response.status(400).json("Error: " + error))

})

// DELETE
router.delete("/:id", (request, response) => {

    GoalTrackerItemSchema.findByIdAndDelete(request.params.id).then(() => response.json(`GoalTrackerItemSchema ${request.params.id} deleted`)).catch(error => response.status(400).json("Error: " + error))
    
})

module.exports = router