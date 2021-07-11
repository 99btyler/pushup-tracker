const router = require("express").Router()

const GoalSchema = require("../models/GoalSchema.js")

// GET
router.get("/", (request, response) => {

    GoalSchema.find().then(data => response.json(data)).catch(error => response.status(400).json("Error: " + error))

})

router.get("/:id", (request, response) => {

    GoalSchema.findById(request.params.id).then(data => response.json(data)).catch(error => response.status(400).json("Error: " + error))

})

// POST
router.post("/create", (request, response) => {

    const newGoalSchema = new GoalSchema({
        amount: Number(request.body.amount),
        days: Number(request.body.days),
        progress: request.body.progress
    })

    newGoalSchema.save().then(newData => response.json(newData)).catch(error => response.status(400).json("Error: " + error))

})

router.post("/edit/:id", (request, response) => {

    GoalSchema.findById(request.params.id).then(goalSchema => {

        goalSchema.amount = Number(request.body.amount)
        goalSchema.days = Number(request.body.days)
        goalSchema.progress = request.body.progress

        goalSchema.save().then(() => response.json(`goalSchema ${request.params.id} updated`)).catch(error => response.status(400).json("Error: " + error))

    }).catch(error => response.status(400).json("Error: " + error))

})

// DELETE
router.delete("/delete/:id", (request, response) => {

    GoalSchema.findByIdAndDelete(request.params.id).then(() => response.json(`GoalSchema ${request.params.id} deleted`)).catch(error => response.status(400).json("Error: " + error))

})

module.exports = router