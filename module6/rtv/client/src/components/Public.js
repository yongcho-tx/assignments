import React, { useContext, useEffect } from 'react'
import {UserContext} from '../context/UserProvider.js'
import IssueCard from './IssueCard.js'


export default function Public (props) {

  const { getAllIssues, allIssues, deleteIssue, user: { username } } = useContext(UserContext)
  const publicIssues = allIssues.map(issue => <IssueCard {...issue} key={issue._id}/>)
  const { downvotesCount, upvotesCount } = props

  useEffect(() => {
    console.log('use effect ran')
    getAllIssues()
  }, [downvotesCount + upvotesCount])

  return (
    <div className="public">
      <h1 style={headerStyle}>All Users' Issues</h1>
      <h2 style={userHeadingStyle}>You are currently logged in as user: {username}</h2>
      <div style={publicIssueStyle}>
        {publicIssues}
      </div>    
    </div>
  )
}

const publicIssueStyle = {
  alignItems: "center",
  display: "flex",
  flexDirection: "column"
}

const headerStyle = {
  fontSize: "30px",
  textAlign: "center",
  margin: "2em"
}

const userHeadingStyle = {
  textAlign: "center",
  fontSize: "18px"
}