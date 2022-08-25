import React, { useContext } from 'react'
import CommentForm from './CommentForm.js'
import UpArrow from '../images/icons8-up-48.png'
import DownArrow from '../images/icons8-down-48.png'
import UserProvider, { UserContext } from '../context/UserProvider.js'

export default function Issue(props) {
    const { title, description, _id, comment, imgUrl } = props
    const { deleteIssue } = useContext(UserContext)

    return (
        <div className="issue" style={divStyle}>
            <h1 style= {{fontSize: "25px"}}>{title}</h1>
            <p>{description}</p>
            <img src={imgUrl} style={imgStyle}></img>
            <button style={btnDelStyle} onClick={() => deleteIssue(_id)}>delete issue</button>
            <p>Upvote</p>
            <img src={UpArrow} style={{width: "36px", height: "36px"}}/>
            <p>VoteCount: </p>
            <img src={DownArrow} style={{width: "36px", height: "36px"}}/>
            <p>Downvote</p>
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

const btnDelStyle = {
    margin: "10px",
    padding: "5px"
}