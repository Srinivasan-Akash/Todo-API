const express = require('express')
const router = express.Router()
const todoModel = require("../models/todoModel")

router.delete("/deleteTodo", async (req, res) => {
    const { user, title } = req.body
    try {
        await todoModel.findOneAndDelete({user: user, title: title})
        res.status(200).json({"msg": "Sucessfully deleted"})
    } catch (error) {
        res.json(error).status(400)
    }
})

module.exports = router