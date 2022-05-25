const express = require('express')
const productRouter = express.Router()
const Product = require('../models/product.js')


// Get all
productRouter.get('/', (req, res, next) => {
    Product.find((err, products) => {
        err ? (res.status(500), next(err)) : res.status(200).send(products)
    })
})

// Get by Id
productRouter.get('/:productId', (req, res, next) => {
    Product.find({ _id: req.params.productId }, (err, products) => {
        err ? (res.status(500), next(err)) : res.status(200).send(products)
    })
})

// Get by query type (e.g. localhost:1000/products/search/type?category=automotive)
productRouter.get('/search/category', (req, res, next) => {
    Product.find({ category: req.query.category }, (err, products) => {
        err ? (res.status(500), next(err)) : res.status(200).send(products)
    })
})

// Add product
productRouter.post('/', (req, res, next) => {
    const newProduct = new Product(req.body)
    newProduct.save((err, savedProduct) => {
        err ? (res.status(500), next(err)) : res.status(201).send(savedProduct)
    })
})

// Delete product
productRouter.delete('/:productId', (req, res) => {
    Product.findOneAndDelete({ _id: req.params.productId }, (err, deletedItem) => {
        err ? (res.status(500), next(err)) : res.status(200).send(`Successfully deleted item ${deletedItem.item} from the database`)
    })
})

// Edit product
productRouter.put('/:productId', (req, res, next) => {
    Product.findOneAndUpdate(
        { _id: req.params.productId },
        req.body,
        { new: true },
        (err, updatedProduct) => {
            err ? (res.status(500), next(err)) : res.status(201).send(updatedProduct)
        }
    )
})
module.exports = productRouter