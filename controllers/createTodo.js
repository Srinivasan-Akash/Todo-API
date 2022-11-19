const express = require('express')
const router = express.Router()
const todoModel = require("../models/todoModel")

router.post("/createTodo", async (req, res) => {
    const {title, tasks, user} = req.body
    console.log(req.body)
    try {
        const todo = await todoModel.create({title, tasks, user})
        res.status(200).json(todo)
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router