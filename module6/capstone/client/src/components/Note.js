import React from 'react'


function Note(props) {
    

    const { notes } = props

    return (
        <div className="user-notes">
            <p> { notes } </p>
        </div>
    )
}

export default Note