import React, { useState, useContext, useEffect } from 'react'
import UserProvider, { UserContext } from '../context/UserProvider.js'
import CommentList from './CommentList.js'
import Comment from './Comment.js'
import {userAxios} from '../context/UserProvider'

export default function CommentForm(props) {

    const initComment = ""
    const [comment, setComment] = useState(initComment)
    const [comments, setComments] = useState([])
    const { _id } = props

    const [isOpen, setIsOpen] = useState(false)


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
                        placeholder="add comment"/>
                        <button>Add Comment</button>
                    </form>
                    
                    <div>
                        <CommentList 
                            comments={comments}
                        />
                        <button style={btnCloseComments} onClick={(() => setIsOpen(false))}>Close Comments</button>
                    </div>
                </>
        
            }   
       
        </>
    )
 }


const btnCloseComments = {
    margin: "10px",
    padding: "5px",
    width: "25%"
}