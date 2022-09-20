import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

const Comment = (props) => {
    
    const { user: { username } } = useContext(UserContext)
    const { comment } = props
    
    return (
        <div className="comment--individual">
            <p> { comment } </p>
            <p style={{paddingBottom: "1em"}}>Comment By: { username }</p>
        </div>
      )
}

export default Comment