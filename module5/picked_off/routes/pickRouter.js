const express = require("express");
const pickRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

pickRouter.use("/", (req, res, next) => {
  console.log("The middleware was executed");
  next();
});

pickRouter.get("/", (req, res, next) => {
  req.body = { model: "Model S" };
  next();
});

pickRouter.get("/", (req, res, next) => {
  res.send(req.body);
});

module.exports = pickRouter;
