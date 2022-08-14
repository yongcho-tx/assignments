import React, { useState, useContext, useEffect } from 'react'
import UserProvider, { UserContext } from '../context/UserProvider.js'
import CommentList from './CommentList.js'
import Comment from './Comment.js'
import {userAxios} from '../context/UserProvider'

export default function CommentForm(props) {

    const initComment = ""
    const [comment, setComment] = useState(initComment)
    const [comments, setComments] = useState([])
    const { addIssue, handleSubmit, handleChange, _id } = props
    // const {addComment} = useContext(UserContext)

    function addComment() {
        userAxios.post(`/api/comment/${_id}`, {comment})
        .then(res => {
            setComments(prevComments => {
                return [...prevComments, res.data]
            })
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    function handleCommentSubmit(e) {
        e.preventDefault()
        addComment()
    }



    function handleShowComments() {
        userAxios.get(`/api/comment/${_id}`)
        .then(res => {
            console.log(res.data)
            setComments(res.data)
        })
        .catch(err => console.log(err))

    }
    return (
        <>

            <button onClick={(handleShowComments)}>Comments</button>
        {

            comments.length > 0 && 
            <>
            <form onSubmit={handleCommentSubmit}>
                <input
                    type="text"
                    name="comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="comment"/>
                <button>Add Comment</button>
            </form>
           
            <button onClick={(() => setComments([]))}>Close Comments</button>
            </>
        }                

            <div>
                <CommentList 
                    comments={comments}
                    
                />
            </div>
        </>
    )
 }