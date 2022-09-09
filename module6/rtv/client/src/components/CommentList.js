import React, { useEffect, useState } from 'react'
import Comment from './Comment.js'

export default function CommentList(props) {

    const { comments } = props
    
    return (
        <div className="comments--listed">
            {/* {console.log(comments)} */}
            {/* {props.children} */}
            { comments.map(comment => <Comment {...comment } key={comment._id}/>)}
            
        </div>
    )
}

