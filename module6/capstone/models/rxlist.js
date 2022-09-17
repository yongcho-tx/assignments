const mongoose = require('mongoose')
const Schema = mongoose.Schema

const rxListSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    tty: {
        type: String,
        required: true
    },
    rxcui: {
        type: Number,
        required: true
    }

})

module.exports = mongoose.model("RxList", rxListSchema)