import React from 'react'

export default function Comment (props) {
    const { comment } = props

    return (
        <div className="comment">
            <p>{comment }</p>
        </div>
    )
}
