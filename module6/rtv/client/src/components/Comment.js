import React from 'react'

export default function Comment (props) {
    const { comment } = props

    return (
        <div className="comment--individual">
            <p>{ comment }</p>
        </div>
    )
}
