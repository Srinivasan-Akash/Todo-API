const express = require('express')
const router = express.Router()
const todoModel = require("../models/todoModel")

router.get("/getAllTodosByUser", async (req, res) => {
    const { user } = req.body
    try {
        const allTodoByUser = await todoModel.find({user: user})
        res.status(200).json({"results": allTodoByUser})
    } catch (error) {
        res.send(error).status(400)
    }
})

module.exports = router