const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Product Blueprint

const productSchema = new Schema({
    item: {
        type: String,
        required: true
    },
    features: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    pros: String,
    cons: String,
    addOns: String,
    caveats: String,
    comments: String
    
})

module.exports = mongoose.model('Product', productSchema)