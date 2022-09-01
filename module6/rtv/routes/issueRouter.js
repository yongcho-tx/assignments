const express = require("express")
const issueRouter = express.Router()
const Issue = require('../models/issue.js')

// Get All Issues
issueRouter.get("/", (req, res, next) => {
  Issue.find((err, issues) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})
// Get Issues by user id ***only works when user bearer token matches and does not need a separate ID since it's getting auth credentials by req.auth._id***
issueRouter.get("/user", (req, res, next) => {
  Issue.find({ user: req.auth._id }, (err, issues) => {
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})
//Get Issue by ID
issueRouter.get("/:issueId", (req, res, next) => {
  Issue.find({ _id: req.params.issueId, user: req.auth._id },
    (err, issues) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(issues)
    })
})
// Add New Issue
issueRouter.post("/", (req, res, next) => {
  req.body.user = req.auth._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})
// Delete Issue by ID
issueRouter.delete("/:issueId", (req, res, next) => {
  Issue.findOneAndDelete(
    { _id: req.params.issueId, user: req.auth._id },
    (err, deletedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted issue ${deletedIssue.title}`)
    })
})
// Update Issue
issueRouter.put("/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate(
    { _id: req.params.issueId, user: req.auth._id },
    req.body,
    { new: true },
    (err, updatedIssue) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    })
})
// upvote
issueRouter.put("/upvote/:issueId", (req, res, next) => {
  console.log(typeof req.auth._id)
  Issue.findById(
    req.params.issueId,
    (err, updatedIssue) => {
      if(err) {
        res.status(500)
        return next(err)
      }
      if(!updatedIssue) {
        res.send("no issue found")
        return next(err)
      }
      const hasUpVoted = updatedIssue.upvotes.includes(req.auth._id)
      if(hasUpVoted) {
        return res.status(200).send({errMsg: `The user has already voted`, newUpvote: false})
      } else {
        Issue.findByIdAndUpdate(req.params.issueId, { $push: { upvotes: req.auth._id }}, {new: true},
      (err, updatedIssue) => {
        if(err) {
          res.status(500)
          return next(err)
        }
        res.status(201).send({updatedIssue, newUpvote: true})
      }
    )}
  })
})

// downvote
issueRouter.put("/downvote/:issueId", (req, res, next) => {
  Issue.findOneAndUpdate()
})


module.exports = issueRouter