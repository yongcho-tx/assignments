import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'
import IssueForm from './IssueForm.js'
import IssueList from './IssueList.js'


const Profile = () => {

  const { user: { username }, addIssue, issues } = useContext(UserContext)
  console.log(issues)
  return (
    <div className="profile">
      <h1>Welcome @{username}!</h1>
      <h3>Add an Issue</h3>
      <IssueForm 
          btnText="Add Issue"
          submit={addIssue}
        />
      {
        issues.length < 1 ?
        <>
          <h1>You have no issues posted!</h1>
        </>

        :
        <>
        <h3>Your Post of Issues</h3>
        <IssueList issues={issues}/>
        </>
      }
    </div>
  )
}

export default Profile