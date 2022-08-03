const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
    title: {
        type: String,
        required: true

    },

    description: {
        type: String,
        required: true
    },
    
    votes: {
        type: Number,
        default: 0
     },

    postedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

issueSchema.methods.vote = function(val) {
    this.votes += Number(val)
}

module.exports = mongoose.model("Issue", issueSchema)