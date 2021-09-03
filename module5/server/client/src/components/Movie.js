import React, { useState } from "react"
import AddMovieForm from "./AddMovieForm.js"

export default function Movie(props) {
    const {title, genre, _id} = props
    const [editToggle, setEditToggle] = useState(false)


    return (
        <div className="movie">
            { !editToggle ?
            <>
                <h1>{title}</h1>
                <p>{genre}</p>
                <button 
                    className="delete-btn"
                    onClick={() => props.deleteMovie(_id)}>
                    Delete
                </button>
                <button
                    className="edit-btn"
                    onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                    Edit
                </button>
            </>
            :
                <>
                    <AddMovieForm 
                        title={title}
                        genre={genre}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editMovie}
                        closeChange={setEditToggle}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
            }  
        </div>
    )
}
