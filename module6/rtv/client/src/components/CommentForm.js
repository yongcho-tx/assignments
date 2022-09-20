import React, { useState } from 'react'
import CommentList from './CommentList.js'
import {userAxios} from '../context/UserProvider'

const CommentForm = (props) => {

    const initComment = ""
    const [comment, setComment] = useState(initComment)
    const [comments, setComments] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const { _id } = props


    const addComment = () => {
        userAxios.post(`/api/comment/${_id}`, {comment})
        .then(res => {
            setComments(prevComments => {
                return [...prevComments, res.data]
            })
            console.log("this is line 23 of comments: ", comments)
            console.log("this is line 24 of comments: ", res.data)
        })
        .catch(err => console.log(err.response.data.errMsg))
    }

    const handleCommentSubmit = (e) => {
        e.preventDefault()
        addComment()
        setComment(initComment)
    }

    const handleShowComments = () => {
        if(comments.length < 1) {
            userAxios.get(`/api/comment/${_id}`)
            .then(res => {
                console.log(res.data)
                setComments(res.data)
            })
            .catch(err => console.log(err))
        }
        setIsOpen(true)
    }

    return (
        <>
            <button className="comments--button" onClick={(handleShowComments)}>Comments</button>
            {

                isOpen &&
                <>
                    <form onSubmit={handleCommentSubmit}>
                        <input
                        type="text"
                        name="comment"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="comment-input"
                        placeholder="add comment"/>
                        <button className="btn-add-comment">Add Comment</button>
                    </form>
                    
                    <div>
                        <CommentList 
                            comments={comments}
                        />
                        <button className="btn-close-comment" onClick={(() => setIsOpen(false))}>Close Comments</button>
                    </div>
                </>
        
            }   
       
        </>
    )
 }

 export default CommentForm
