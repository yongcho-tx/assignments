const express = require("express")
const bountyRouter = express.Router()
const uuid = require("uuid").v4


const bounties = [
    {
        first_name: "Darth",
        last_name: "Revan",
        living: true,
        bounty_amt: 20,
        type: "Sith",
        _id: uuid()

    },

    {
        first_name: "Darth",
        last_name: "Bane",
        living: true,
        bounty_amt: 80,
        type: "Sith",
        _id: uuid()
    },
    {
        first_name: "Mace",
        last_name: "Windu",
        living: true,
        bounty_amt: 120,
        type: "Jedi",
        _id: uuid()
    }
]

bountyRouter.get("/", (req, res) => {
        res.send(bounties)
    })

bountyRouter.get("/bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const foundBounty = bounties.find(bounty => bounty._id === bountyId)
    res.send(foundBounty)
})

bountyRouter.post("", (req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(newBounty)
    })
    
bountyRouter.delete("/:bountyId", (req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Successfully deleted bounty")
})
    .put("/:bountyId", (req, res) => {
        const bountyId = req.params.bountyId
        const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
        const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
        res.send(updatedBounty)
    })


module.exports = bountyRouter