const mongoose = require("mongoose")

const Schema = mongoose.Schema

const todoSchema = new Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    tasks: {
        type: [String],
        unique: true,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Todo', todoSchema);