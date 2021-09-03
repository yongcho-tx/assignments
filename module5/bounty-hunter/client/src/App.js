import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"




export default function App(props) {
    const [bounties, setBounties] = useState([])
  
    const getBounties = () => {
        axios.get("/bounty")
            .then(res => setBounties(res.data))
            .catch(err => console.log(err))
    }

    const addBounty = newBounty => {
        axios.post("/bounty", newBounty)
            .then(res => {
                console.log(res.data)
                setBounties(prevBounties => [...prevBounties, res.data])
            })
            .catch(err => console.log(err))
    }

    const deleteBounty = bountyId => {
        axios.delete(`/bounty/${bountyId}`)
            .then(res => {
                setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bountyId))
            })
            .catch(err => console.log(err))
    }

    const editBounty = (updates, bountyId) => {
        axios.put(`/bounty/${bountyId}`, updates)
            .then(res => {
                setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bountyId ? bounty : res.data))
                console.log(res.data)
                // props.setToggleEdit(false)

            })
            .catch(err => console.log(err))
    }


    // axios.put(.../${id}).then((res) => {
    //     setBounties(prevBounties => {
    //         return prevBounties.map(bounty => {
    //             return bounty._id !== id ? bounty : res.data
    //         } 
    //     }
    // }

    useEffect(() => {
        getBounties()
    }, [])

    return (
        <div>
            <div className="bounty-container">
                <AddBountyForm 
                    submit={addBounty}
                    btnText="Add Bounty"
                />
                { 
                    bounties.map(bounty => 
                        <Bounty
                            {...bounty}
                            key={bounty._id}
                            deleteBounty={deleteBounty}
                            editBounty={editBounty}/>)
                }
            </div>
        </div>
    )
}

