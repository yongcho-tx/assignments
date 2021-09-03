import React,  { useState } from "react"

export default function AddBountyForm(props) {

    const initInputs = { 
        first_name: props.first_name || "", 
        last_name: props.last_name || "", 
        bounty_amt: props.bounty_amt || "", 
        type: props.type || ""
    }
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return (
        
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="first_name"
                value={inputs.first_name}
                onChange={handleChange}
                placeholder="First Name"/>
            <input
                type="text"
                name="last_name"
                value={inputs.last_name}
                onChange={handleChange}
                placeholder="Last Name"/>
            <input
                type="number"
                name="bounty_amt"
                value={inputs.bounty_amt}
                onChange={handleChange}
                placeholder="Bounty Amount"/>
            <input
                type="text"
                name="type"
                value={inputs.type}
                onChange={handleChange}
                placeholder="Type"/>
            <button>{ props.btnText }</button>
        </form>
    )
}