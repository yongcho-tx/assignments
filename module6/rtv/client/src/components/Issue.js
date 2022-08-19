import React from 'react'
import CommentForm from './CommentForm.js'


export default function Issue(props) {
    const { title, description, _id, comment, imgUrl } = props

    return (
        <div className="issue" style={divStyle}>
            <h1 style= {{fontSize: "25px"}}>{title}</h1>
            <p>{description}</p>
            <img src={imgUrl} style={imgStyle}></img>
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

const imgStyle = {
    maxHeight: "500px",
    maxWidth: "500px"
}