const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notesSchema = new Schema({
    notes: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Notes", notesSchema)