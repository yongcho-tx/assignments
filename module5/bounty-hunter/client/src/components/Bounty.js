import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm.js"

export default function Bounty(props) {

    const { first_name, last_name, bounty_amt, type, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    // const [ inputs, setInputs ] = useState(initInputs)
    return (
        <div className="bounty">
            { !editToggle ?
                <>
                    <h1>Name: {first_name} {last_name}</h1>
                    <p>Bounty Amount: {bounty_amt}</p>
                    <p>Type: {type}</p>
                    <button 
                        className="delete-btn"
                        onClick={() => props.deleteBounty(_id)}>
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
                    <AddBountyForm 
                        first_name={first_name}
                        last_name={last_name}
                        bounty_amt={bounty_amt}
                        type={type}
                        _id={_id}
                        btnText="Submit Edit"
                        submit={props.editBounty}
                        
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
