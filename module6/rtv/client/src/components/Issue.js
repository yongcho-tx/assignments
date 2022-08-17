import React from 'react'
import CommentForm from './CommentForm.js'

export default function Issue(props) {
    const { title, description, _id, comment, imgUrl } = props

    return (
        <div className="issue" style={divStyle}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <img src={imgUrl}></img>
            <button>delete issue</button>
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
