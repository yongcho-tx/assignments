import axios from 'axios'
import React, { useState } from 'react'


function NotesForm(props) {

    const { addNote } = props
    const initInputs = {
        notes: ""
    }

    const [inputs, setInputs] = useState(initInputs)
    const [allNotes, setAllNotes] = useState([])

  
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        addNote(inputs)
        setInputs(initInputs)
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
    // useEffect(() => {
        // getNotes()
        // getUserNotes()

    //     console.log("useeffect ran")
    // }, [notes])


    // if(isError) return <h1> Error: {error.mesage}, try again!</h1>
    // if(isLoading) return <h1> Loading...</h1>

    // console.log(data)

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