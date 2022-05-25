const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))


mongoose.connect('mongodb://localhost:27017/productdb',
    () => console.log('Connected to the productdb')
)

app.use('/products', require('./routes/productRouter.js'))

app.use((err, req, res, next) => {
    console.log(err)
    return res.send({errMsg: err.messsage})
})

//Port / Callback
app.listen(1000, () => {
    console.log("The server is running on port 1000")
})