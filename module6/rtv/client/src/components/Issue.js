import React from 'react'

export default function Issue(props) {
    const { title, description, _id } = props

    return (
        <div className="issue" style={divStyle}>
            <h1>{title}</h1>
            <h3>{description}</h3>
        </div>
    )
}


const divStyle = {
    border: "1px solid black",
    padding: "2em",
    margin: "1em"
}
