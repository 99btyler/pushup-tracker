const mongoose = require("mongoose")
const Schema = mongoose.Schema

const goalTrackerItemSchema = new Schema(
    {
        day: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        }
    }
)

module.exports = mongoose.model("goalTrackerItemSchema", goalTrackerItemSchema)