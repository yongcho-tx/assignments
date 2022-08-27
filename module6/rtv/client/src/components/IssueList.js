import React, {useContext} from 'react'
import IssueCard from './IssueCard.js'
import UserProvider, { UserContext } from '../context/UserProvider.js'


export default function IssueList(props) {

    const { issues } = props
    const { editIssue } = useContext(UserContext)
    
    return (
        <div className="issue-list">
            { issues.map(issue => <IssueCard {...issue} key={issue._id} editIssue={editIssue}/>)}
           
        </div>
    )
}

