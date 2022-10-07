const express = require('express')
const notes = require('../models/notes.js')
const notesRouter = express.Router()
const Notes = require('../models/notes.js')

// Get all Notes
notesRouter.get("/", (req, res, next) => {
    Notes.find((err, notes) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(notes)
    })
})


// Post Note
notesRouter.post("/", (req, res, next) => {
    const newNote = new Notes(req.body)
    newNote.save((err, savedNote) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(savedNote)
    })
})

// Delete Note
notesRouter.delete("/:noteId", (req, res, next) => {
    Notes.findOneAndDelete(
        { _id: req.params.noteId },
        (err, deletedNote) => {
            if(err) {
                res.status(500)
                return next(err)
            }
            return res.status(200).send(`Successfully deleted note ${deletedNote.notes}`)
        }
    )

})


module.exports = notesRouter