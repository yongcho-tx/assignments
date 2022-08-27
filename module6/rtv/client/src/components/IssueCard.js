import React, { useContext } from 'react'
import CommentForm from './CommentForm.js'
import UpArrow from '../images/icons8-up-48.png'
import DownArrow from '../images/icons8-down-48.png'
import UserProvider, { UserContext } from '../context/UserProvider.js'
import IssueForm from './IssueForm'

export default function Issue(props) {
    const { title, description, _id, comment, imgUrl, upvotes, downvotes} = props
    const { deleteIssue, editIssue, upVote, downVote } = useContext(UserContext)



    return (
        <div className="issue" style={divStyle}>
            <h1 style= {{fontSize: "25px"}}>{title}</h1>
            <p>{description}</p>
            <img src={imgUrl} style={imgStyle}></img>
            <button style={btnDelStyle} onClick={() => deleteIssue(_id)}>delete issue</button>
            <button style={btnEditStyle} onClick={() => editIssue(_id)}>edit issue</button>
            <p>Upvote: {upvotes.length}</p>
            <img src={UpArrow} style={{width: "36px", height: "36px"}} onClick={() => upVote(_id)}/>
            <p>Total Votes: </p>
            <img src={DownArrow} style={{width: "36px", height: "36px"}}/>
            <p>Downvote: {downvotes.length} </p>
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
    margin: "1em",
    borderRadius: "10px"
}

const imgStyle = {
    maxHeight: "500px",
    maxWidth: "500px"
}

const { btnDelStyle, btnEditStyle } = {
    margin: "10px",
    padding: "5px"
}