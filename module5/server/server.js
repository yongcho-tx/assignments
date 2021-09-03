const express = require("express")
const app = express()
const uuid = require("uuid").v4
const morgan = require("morgan")

// Middleware (for every request) //
app.use(express.json())//looks for a request body, and turns it into 'req.body'
app.use(morgan("dev")) //Logs requests to the console

app.use("/items", (req, res, next) => {
    console.log("The items Middleware was executed")
    next()
})

app.use("/items", (req, res, next) => {
    req.body = { name: "Rick" }
    next()
})

app.get("/items", (req, res, next) => {
    console.log("Get request received")
    res.send(req.body)
})
//Routes//

app.use("/movies", require("./routes/movieRouter.js"))
app.use("/tvshows", require("./routes/tvRouter.js"))

//provided by express
//1: PORT   2: CallBack
app.listen(9001, () => {
    console.log("The server is running on Port 9001")
})