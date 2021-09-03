const express = require("express")
const movieRouter = express.Router()
const uuid = require("uuid").v4

const movies = [
    { title: "terminator", genre: "sifi", _id: uuid()},
    { title: "shine", genre: "documentary", _id: uuid()},
    { title: "lion king", genre: "animation", _id: uuid()},
    { title: "freaky friday", genre: "drama", _id: uuid()},

]


// Get all movies
movieRouter.get("/", (req, res) => {
    res.send(movies)
})

// Get One Movie

movieRouter.get("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    res.send(foundMovie)
})


// Get by genre
// movieRouter.get("/search/genre", (req, res) => {
//     const genre = req.query.genre
//     const filteredMovies = movies.filter(movie => movie.genre === genre)
//     res.send(filteredMovies)
// })

movieRouter.post("", (req, res) => {
const newMovie = req.body
newMovie._id = uuid()
movies.push(newMovie)
res.send(newMovie)
})


//Routes of both get and post combined into one route
// movieRouter.route("/")
//     .get((req, res) => {
//         res.send(movies)
//     })
//     .post((req, res) => {
//         const newMovie = req.body
//     newMovie._id = uuid()
//     movies.push(newMovie)
//     res.send(`successfully added ${newMovie.title} to the db`)
//     })


movieRouter.delete("/:movieId", (req, res) => {
    const movieId = req.params.movieId
    const movieIndex = movies.findIndex(movie => movie._id === movieId)
    movies.splice(movieIndex, 1)
    res.send("Successfully deleted movie")
})
    .put("/:movieId", (req, res) => {
        const movieId = req.params.movieId
        const movieIndex = movies.findIndex(movie => movie._id === movieId)
        const updatedMovie = Object.assign(movies[movieIndex], req.body)
        res.send(updatedMovie)
    })



module.exports = movieRouter