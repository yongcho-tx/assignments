const express = require("express");
const bountyRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const bounties = [
  {
    firstName: "Darth",
    lastName: "Vader",
    living: true,
    bountyAmount: 300,
    type: "sith",
    _id: uuidv4(),
  },
  {
    firstName: "Darth",
    lastName: "Bane",
    living: true,
    bountyAmount: 100,
    type: "sith",
    _id: uuidv4(),
  },
];

bountyRouter.get("/", (req, res) => {
  res.send(bounties);
});

bountyRouter.post("/", (req, res) => {
  const newBounty = req.body;
  newBounty._id = uuidv4();
  bounties.push(newBounty);
  // res.send(`Added ${newBounty.firstName} to the database`);
  res.send(newBounty)
});

// Delete one

bountyRouter.delete("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
  bounties.splice(bountyIndex, 1);
  res.send("Successfully deleted bounty");
});

// Update one

bountyRouter.put("/:bountyId", (req, res) => {
  const bountyId = req.params.bountyId;
  const updateObject = req.body;
  const bountyIndex = bounties.findIndex((bounty) => bounty._id === bountyId);
  const updatedBounty = Object.assign(bounties[bountyIndex], updateObject);
  res.send(updatedBounty);
});

module.exports = bountyRouter;
