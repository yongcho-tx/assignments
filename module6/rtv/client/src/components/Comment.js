import React, { useContext } from 'react'
import { UserContext } from '../context/UserProvider.js'

export default function Comment (props) {
    const { comment } = props
    const { user: { username } } = useContext(UserContext)
      return (
          <div className="comment--individual">
              <p> { comment } </p>
              <p style={{paddingBottom: "1em"}}>Comment By: { username }</p>
          </div>
      )
}