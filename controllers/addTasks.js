const express = require('express')
const router = express.Router()
const todoModel = require("../models/todoModel")

router.get("/addTasks", async (req, res) => {
    const { user, title, task } = req.body
    try {
        const Todo = await todoModel.findOne({user: user, title: title})
        Todo.tasks.push(task)
        res.json(Todo)
    } catch (error) {
        res.json(error).status(400)
    }
})

module.exports = router