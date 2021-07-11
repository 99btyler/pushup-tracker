const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
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

module.exports = mongoose.model("UserSchema", UserSchema)