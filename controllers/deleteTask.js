const express = require('express')
const router = express.Router()
const todoModel = require("../models/todoModel")

router.get("/deleteTask", async (req, res) => {
    const { user, title, task } = req.body
    try {
        const Todo = await todoModel.findOne({user: user, title: title})
        Todo.tasks.splice(Todo.tasks.indexOf(task)-1, Todo.tasks.indexOf(task)+1)
        res.status(200).json(Todo)
    } catch (error) {
        
    }
})

module.exports = router