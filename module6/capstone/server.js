const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
// const {expressjwt} = require('expresss-jwt')
// require('dotenv').config()


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/druginteraction',
    () => console.log('Connected to the db')
)

// app.use('/auth', require('./routes/authRouter.js'))
// app.use('/api/', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']}))

app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(7001, () => {
    console.log(`The server is running on local port 7001`)
})