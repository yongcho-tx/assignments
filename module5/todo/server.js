const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

// below object needs to be moved to the route page if route is to be used
// const todos = [
//   {
//     name: "The name",
//     description: "The description of the todo",
//     imageUrl: "na",
//     completed: false,
//     _id: uuidv4(),
//   },
// ];

// allows users to retrieve all todos without route
// app.get("/todos", (req, res) => {
//   res.send(todos);
// });

// add one to todos object without route
// app.post("/todos", (req, res) => {
//   const newTodo = req.body;
//   newTodo._id = uuidv4();
//   todos.push(newTodo);
//   res.send(`Added ${newTodo.name} to the database`);
// });

// delete one todo item from the database without route

// app.delete("/todos/:todoId", (req, res) => {
//   const todoId = req.params.todoId
//   const todoIndex = todos.findIndex(todo => todo._id === todoId)
//   todos.splice(todoIndex, 1)
//   res.send("successfully deleted todo")
// })

// edit todo item without route

// app.put("/todos/:todoId", (req, res) => {
//   const todoId = req.params.todoId
//   const updateObject = req.body
//   const todoIndex = todos.findIndex(todo => todo._id === todoId)
//   const updatedTodo = Object.assign(todos[todoIndex],updateObject)
//   res.send(updatedTodo)
// })

app.use("/todos", require("./routes/todoRouter.js"))

app.listen(9002, () => {
  console.log("The server is running on port 9002");
});
