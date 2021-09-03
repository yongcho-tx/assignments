const express = require("express")
const tvRouter = express.Router()
const uuid = require("uuid").v4


const tvShows = [
    { title: "Rick and morty", _id: uuid() },
    { title: "Beavis and Butthead", _id: uuid() },
    { title: "Soutpark", _id: uuid() },
    { title: "Dexter", _id: uuid() }
]


tvRouter.get("/", (req, res) => {
    res.send(tvShows)
})

tvRouter.get("/:tvshowId", (req, res) => {
    const tvShowId = req.params.tvshowId
    const foundShow = tvShows.find(show => show._id === tvShowId)
    res.send(foundShow)
})


// tvRouter.post("/", (req, res) => {
//     const newTvShow = req.body
//     newTvShow._id = uuid()
//     tvShows.push(newTvShow)
//     res.send(`successfully added ${newTvShow.title} to the db`)
// })


module.exports = tvRouter