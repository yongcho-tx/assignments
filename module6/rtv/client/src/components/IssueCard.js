import React, { useContext, useState, useEffect } from 'react'
import CommentForm from './CommentForm.js'
import UpArrow from '../images/icons8-up-48.png'
import DownArrow from '../images/icons8-down-48.png'
import { UserContext } from '../context/UserProvider.js'
import {userAxios} from '../context/UserProvider'
import IssueForm from './IssueForm.js'


const IssueCard = (props) => {

    const { title, description, _id, comment, imgUrl, upvotes, downvotes } = props
    const { deleteIssue, getUserIssues, editIssue } = useContext(UserContext)
    const [upvotesCount, setUpvotesCount] = useState(upvotes.length)
    const [downvotesCount, setDownvotesCount] = useState(downvotes.length)
    const [editToggle, setEditToggle] = useState(false)


    useEffect(() => {
        getUserIssues()
    }, [downvotesCount, upvotesCount])


    const handleUpvote = () => {
        userAxios.put(`/api/issue/upvote/${_id}`)
        .then(res => {
            console.log(`this is res.data.upvotes ${res.data.upvotes}`)
            setUpvotesCount(res.data.upvotes.length)
            setDownvotesCount(res.data.downvotes.length)
        })
        .catch(err => console.log(err))

    }
    const handleDownvote = () => {
        userAxios.put(`/api/issue/downvote/${_id}`)
        .then(res => {
            console.log(res.data.downvotes)
            setDownvotesCount(res.data.downvotes.length)
            setUpvotesCount(res.data.upvotes.length)
        })
        .catch(err => console.log(err))

    }

    return (
        <div className="issue" style={cardStyle}>
            { !editToggle ?
                <>
                    <h1 style= {{fontSize: "25px"}}>{title}</h1>
                    <p style={{margin: "10px 0"}}>{description}</p>
                    <img src={imgUrl} style={imgStyle}></img>
                    <button style={btnDelStyle} onClick={() => deleteIssue(_id)}>delete issue</button>
                    <button style={btnEditStyle} onClick={() => setEditToggle(prevToggle => !prevToggle)}>edit issue</button>
                    <p>Upvote: {upvotesCount}</p>
                    <img src={UpArrow} style={{width: "36px", height: "36px"}} onClick={handleUpvote}/>
                    <p>Total Votes: { upvotesCount + downvotesCount }</p>
                    <img src={DownArrow} style={{width: "36px", height: "36px"}} onClick={handleDownvote}/>
                    <p>Downvote: {downvotesCount} </p>
                    <h4>{comment}</h4>
                    <CommentForm _id={_id}/>
                </>
            :
                <>
                    <IssueForm
                        title={title}
                        description={description}
                        imgUrl={imgUrl}
                        btnText="Submit Edit"
                        _id={_id}
                        submit={editIssue}
                        handleClose={setEditToggle}
                    />
                    <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
                </>
            }
        </div>
    )
}

export default IssueCard

const cardStyle = {
    border: "1px solid black",
    padding: "2em",
    margin: "2em",
    borderRadius: "10px",
    width: "300px"
}

const imgStyle = {
    maxHeight: "500px",
    maxWidth: "500px",
    margin: "12px 0"
}

const btnDelStyle = {
    margin: "10px 0",
    padding: "10px",
    width: "80%"
}
const btnEditStyle = {
    margin: "10px 0",
    padding: "10px",
    width: "80%"
}