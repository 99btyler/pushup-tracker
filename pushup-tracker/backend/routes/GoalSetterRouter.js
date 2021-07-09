const router = require("express").Router()

const GoalSetterSchema = require("../models/GoalSetterSchema.js")

// GET
router.get("/", (request, response) => {
    GoalSetterSchema.find().then(data => response.json(data)).catch(error => response.status(400).json("Error: " + error))
})

// POST
router.post("/add", (request, response) => {
    const newGoalSetterSchema = new GoalSetterSchema({
        amount: Number(request.body.amount),
        days: Number(request.body.days)
    })
    newGoalSetterSchema.save().then(newData => response.json(newData)).catch(error => response.status(400).json("Error: " + error))
})

// DELETE
router.delete("/:id", (request, response) => {
    GoalSetterSchema.findByIdAndDelete(request.params.id).then(() => response.json(`GoalSetterSchema ${request.params.id} deleted`)).catch(error => response.status(400).json("Error: " + error))
})

module.exports = router