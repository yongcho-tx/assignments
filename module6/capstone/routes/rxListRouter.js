const express = require('express')
const rxListRouter = express.Router()
const RxList = require('../models/rxlist.js')

// Post a new medicine
rxListRouter.post("/", (req, res, next) => {
    const newMed = new RxList(req.body)
    newMed.save((err, savedMed) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedMed)
    })
})

// Get medicine list
rxListRouter.get("/", (req, res, next) => {
    RxList.find((err, rxlist) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(rxlist)
    })
})
module.exports = rxListRouter