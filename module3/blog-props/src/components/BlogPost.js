import React from "react"

function BlogPost(props) {
    return (
        <div className="blog-item">
            <h2 className="post-title">{props.blog.title}</h2>
            <h3 className="post-subtitle">{props.blog.subTitle}</h3>
            <p>Posted by {props.blog.author} on {props.blog.date}</p>
            <hr></hr>
        </div>
    )
}
export default BlogPost