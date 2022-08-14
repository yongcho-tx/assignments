import React from 'react'
import CommentForm from './CommentForm.js'

export default function Issue(props) {
    const { title, description, _id, comment } = props

    return (
        <div className="issue" style={divStyle}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h4>{comment}</h4>
            <CommentForm 
                _id={_id}
            />
        </div>
    )
}


const divStyle = {
    border: "1px solid black",
    padding: "2em",
    margin: "1em"
}
