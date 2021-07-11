const mongoose = require("mongoose")
const Schema = mongoose.Schema

const GoalSchema = new Schema(
    {
        amount: {
            type: Number,
            required: true
        },
        days: {
            type: Number,
            required: true
        },
        progress: {
            type: [Number],
            required: true
        }
    }
)

module.exports = mongoose.model("GoalSchema", GoalSchema)