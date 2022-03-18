const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const todos = [
    {
      name: "The name",
      description: "The description of the todo",
      imageUrl: "na",
      completed: false,
      _id: uuidv4()
    }
  ];

//get all
todoRouter.get("/", (req, res) => {
    res.send(todos)
})
//add one
todoRouter.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Added ${newTodo.name} has been added`)
})
//delete one
todoRouter.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todos => todos._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted todo item")
})
//edit or update item
todoRouter.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const updateObject = req.body
    const todoIndex = todos.findIndex(todos => todos._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], updateObject)
    res.send(updatedTodo)
})
  module.exports = todoRouter