import axios from 'axios'
import React, { useState, useEffect } from 'react'


function NotesForm(props) {

    const initInputs = {
        notes: ""
    }

    const [inputs, setInputs] = useState(initInputs)
    const [allNotes, setAllNotes] = useState([])

    function addNotes() {
        axios.post("/notes", {notes})
            .then(res => {
                console.log(res.data)
                setInputs(prevInputs => ({
                    ...prevInputs
                }))
                console.log("notes: ", inputs)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

  
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addNotes()
        setInputs(initInputs)
    }

    function getNotes() {
        axios.get("/notes")
            .then(res => {
                setAllNotes(res.data)
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    function handleDelete(noteId) {
        axios.delete(`/notes/${noteId}`)
            .then(res => {
                setAllNotes(prevState => prevState.filter(note => note._id !== noteId))
            })
            .catch(err => console.log(err.response.data.errMsg))
    }

    const { notes } = inputs

    //this works but is this the best practice, as it triggers useeffect with each keystroke?
    useEffect(() => {
        getNotes()
        console.log("useeffect ran")
    }, [notes])

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="notes"
                    value={notes}
                    onChange={handleChange}
                    placeholder="Notes"
                />
                <button> Submit </button>
            </form>
            <div>
                {allNotes.map(note => <p key={note._id}>{note.notes} <button onClick={() => handleDelete(note._id)}>delete</button></p>)}
            </div>
        </>
    )
}

export default NotesForm