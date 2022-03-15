const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");

app.use(express.json());

app.use("/picks", require("./routes/pickRouter.js"));

app.listen(9005, () => {
  console.log("The server is running on port 9005");
});
