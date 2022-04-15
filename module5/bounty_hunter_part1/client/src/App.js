import React, { useState, useEffect } from "react"
import axios from "axios"
import Bounty from "./components/Bounty.js"
import AddBountyForm from "./components/AddBountyForm.js"

export default function App() {
  const [ bounties, setBounties ] = useState([])

  const getMovies = () => {
    axios.get("/bounties")
    .then(res => setBounties(res.data))
    .catch(err => console.log(err))
  }


  const addBounty = (newBounty) => {
    axios.post("/bounties", newBounty)
    .then(res => {
      setBounties(prevBounties => [...prevBounties, res.data])
    })
    .catch(err => console.log(err))
  }

  const deleteBounty = bounty_id => {
    axios.delete(`/bounties/${bounty_id}`)
    .then(res => {
      setBounties(prevBounties => prevBounties.filter(bounty => bounty._id !== bounty_id))
    })
    .catch(err => console.log(err))
  }

  const editBounty = (updates, bounty_id) => {
    axios.put(`/bounties/${bounty_id}`, updates)
      // .then(res => console.log(res)) //way to see logs
      .then(res => {
          setBounties(prevBounties => prevBounties.map(bounty => bounty._id !== bounty_id  ? bounty : res.data))
        })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div>
      <div className="bounty-container">
        <AddBountyForm 
          submit={addBounty}
          btnText="Add Movie"
        />
      { bounties.map(bounty => 
        <Bounty 
          {...bounty} 
          key={bounty._id}
          deleteBounty={deleteBounty}
          editBounty={editBounty}
          />)}
      </div>
    </div>
  )
}