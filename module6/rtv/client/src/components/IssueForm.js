import React, { useState, useEffect, useContext } from 'react'
import {userAxios} from '../context/UserProvider'
import UserProvider, { UserContext } from '../context/UserProvider.js'

const initInputs = {
    title: "",
    description: "",
    comment: ""
}

export default function IssueForm(props) {

    const [inputs, setInputs] = useState(initInputs)
    const { addIssue, addComment } = props
    const {getUserIssues} = React.useContext(UserContext)

    useEffect(() => { 
        getUserIssues()
        
    }, [])
    
    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({
            ...prevInputs,
            [name]: value
        }))
    }
    function handleSubmit(e) {
        e.preventDefault()
        addIssue(inputs)
        setInputs(initInputs)
    }

 
    const { title, description } = inputs

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                placeholder="Title"/>
            <input
                type="text"
                name="description"
                value={description}
                onChange={handleChange}
                placeholder="Description"/>
            <button>Add Issue</button>
        </form>
    )
 }