const router = require("express").Router()

const UserSchema = require("../models/UserSchema.js")

// GET
router.get("/", (request, response) => {
    UserSchema.find().then(data => response.json(data)).catch(error => response.status(400).json("Error: " + error))
})

router.get("/:id", (request, response) => {
    UserSchema.findById(request.params.id).then(data => response.json(data)).catch(error => response.status(400).json("Error: " + error))
})

// POST
router.post("/add", (request, response) => {

    const newUserSchema = new UserSchema({
        username: request.body.username,
        amount: Number(request.body.amount),
        days: Number(request.body.days),
        progressData: request.body.progressData
    })

    newUserSchema.save().then(newData => response.json(newData)).catch(error => response.status(400).json("Error: " + error))

})

router.post("/edit/:id", (request, response) => {

    UserSchema.findById(request.params.id).then(userSchema => {

        userSchema.username = request.body.username
        userSchema.amount = Number(request.body.amount)
        userSchema.days = Number(request.body.days)
        userSchema.progressData = request.body.progressData

        userSchema.save().then(() => response.json(`UserSchema ${request.params.id} updated`)).catch(error => response.status(400).json("Error: " + error))

    }).catch(error => response.status(400).json("Error: " + error))

})

// DELETE
router.delete("/delete/:id", (request, response) => {
    UserSchema.findByIdAndDelete(request.params.id).then(() => response.json(`UserSchema ${request.params.id} deleted`)).catch(error => response.status(400).json("Error: " + error))
})

module.exports = router