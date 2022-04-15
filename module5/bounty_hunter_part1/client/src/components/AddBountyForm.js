import React, { useState } from "react"


export default function AddBountyForm(props) {
    const initInputs = { firstName: props.first || "", lastName: props.last || "", bountyAmount: props.amount || "", type: props.type || ""}
    //if exists firstName = props.firstName or empty "" if nothing exists
    const [inputs, setInputs] = useState(initInputs)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value})
        )
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.submit(inputs, props._id)
        console.log(inputs)
        setInputs(initInputs)
        if(props.handleClose) {
            props.handleClose(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            name="firstName" 
            value={inputs.firstName}
            onChange={handleChange} 
            placeholder="First Name"/>
            <input 
            type="text" 
            name="lastName" 
            value={inputs.lastName}
            onChange={handleChange} 
            placeholder="Last Name"/>
            <input 
            type="number" 
            name="bountyAmount" 
            value={inputs.bountyAmount}
            onChange={handleChange} 
            placeholder="Bounty Amount"/>
            <input 
            type="text" 
            name="type" 
            value={inputs.type}
            onChange={handleChange} 
            placeholder="Sith or Jedi"/>
            <button>{ props.btnText }</button>
        </form>

    )
}