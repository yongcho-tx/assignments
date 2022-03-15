const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("The middleware was executed");
  next();
});

app.get("/", (req, res, next) => {
  req.body = { name: "Rick" };
  next();
});

app.get("/", (req, res, next) => {
  res.send(req.body);
});

app.listen(9005, () => {
  console.log("The server is running on port 9005");
});
