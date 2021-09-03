import React,  { useState } from "react"

export default function AddMovieForm(props) {

    const initInputs = { genre: props.genre || "", title: props.title || "" } // if props.title exists or empty string
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
        if(props.closeChange) {
            props.closeChange(false)
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="title"
            value={inputs.title}
            onChange={handleChange}
            placeholder="Title"/>
            <input type="text"
            name="genre"
            value={inputs.genre}
            onChange={handleChange}
            placeholder="Genre"/>
            <button>{ props.btnText }</button>
        </form>
    )
}