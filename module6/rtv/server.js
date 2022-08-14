const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expressjwt} = require('express-jwt')
require('dotenv').config()


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect(
    'mongodb://localhost:27017/rockthevote',
    () => console.log('Connected to the db')
)

app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressjwt({ secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/issue', require('./routes/issueRouter.js'))
app.use('/api/comment', require('./routes/commentRouter.js'))
// app.use('./issue', require('./routes/issue.js'))
// app.use('./comment', require('./routes/comment.js'))


app.use((err, req, res, next) => {
    console.log(err)
    if(err.name === "UnauthorizedError") {
        res.status(err.status)
    }
    return res.send({errMsg: err.message})
})

app.listen(8000, () => {
    console.log(`Server is running on local port 8000`)
})