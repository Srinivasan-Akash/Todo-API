// importing packages and db connection function
const express = require("express")
const bodyParser = require("body-parser")
const connectToDatabase = require("./config/DB")

// importing controllers
const createTodo = require("./controllers/createTodo")
const deleteTodo = require("./controllers/deleteTodo")
const getTodoByUser = require("./controllers/getAllTodosByUser")
const addTasks = require("./controllers/addTasks")
const deleteTask = require("./controllers/deleteTask")

// Init of express app and adding middleware
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/create", createTodo)
app.use("/delete", deleteTodo)
app.use("/getTodos", getTodoByUser)
app.use("/tasks", addTasks)
app.use("/tasks", deleteTask)

// Connecting to db and listening to server
connectToDatabase()
app.listen(4000, () => console.log("listening"))