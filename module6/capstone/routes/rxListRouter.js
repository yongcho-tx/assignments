const express = require('express')
const rxlist = require('../models/rxlist.js')
const rxListRouter = express.Router()
const RxList = require('../models/rxlist.js')

// Post Med
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

// Get Med
rxListRouter.get("/", (req, res, next) => {
    RxList.find((err, rxlist) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(rxlist)
    })
})

// Get Med by ID
rxListRouter.get("/:medId", (req, res, next) => {
    RxList.find({ _id: req.params.medId },
        (err, rx) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(rx)
        }
    )
})

//Delete Med
rxListRouter.delete("/:medId", (req, res, next) => {
    RxList.findOneAndDelete(
        { _id: req.params.medId },
        (err, deletedMed) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted med ${deletedMed.name}`)
        }
    )
})

module.exports = rxListRouter