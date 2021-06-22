import React from "react"
import blogData from "./blogArray"
import BlogPost from "./BlogPost"

function BlogList() {
    const blogComponent = blogData.map(blogItem => <BlogPost key={blogItem.date} blog={blogItem}/>)
    return (
        <div className="blog-container">
            <div className="blog-inner">
            {blogComponent}
            </div>
        </div>
    )
}

export default BlogList