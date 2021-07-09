const mongoose = require("mongoose")
const Schema = mongoose.Schema

const GoalSetterSchema = new Schema(
    {
        amount: {
            type: Number,
            required: true
        },
        days: {
            type: Number,
            required: true
        }
    }
)

module.exports = mongoose.model("GoalSetterSchema", GoalSetterSchema)