import React from 'react'
import IssueCard from './IssueCard.js'

const IssueList = (props) => {

    const { issues } = props
    
    return (
        <div className="issue-list">
            { issues.map(issue => <IssueCard {...issue} key={issue._id}/>)}
        </div>
    )
}

export default IssueList
