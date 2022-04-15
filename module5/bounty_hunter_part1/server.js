const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const morgan = require("morgan")

app.use(express.json());
app.use(morgan("dev"))


//Routes
app.use("/bounties", require("./routes/bountyRouter.js"));
 //logs requests to console
// app.get("/bounties", (req, res) => {
//   res.send(bounties);
// });

// app.post("/bounties", (req, res) => {
//   const newBounty = req.body;
//   bounties.push(newBounty);
//   res.send(`Successfully added ${newBounty.title} to db`);
// });
app.listen(9005, () => {
  console.log("The server is running on port 9005");
});
