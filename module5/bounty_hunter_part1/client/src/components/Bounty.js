import React, { useState } from "react"
import AddBountyForm from "./AddBountyForm"

export default function Bounty(props) {
	const { firstName, lastName, living, bountyAmount, type, _id } = props
	const [editToggle, setEditToggle] = useState(false)
	return (
		<div className="each-bounty">
		
			{ !editToggle ?
				<>
					<h3>Name: { firstName } { lastName } </h3>
					<h3>Bounty Amount: { bountyAmount } </h3>
					<h3>Type: { type }</h3>
					<button 
						className="delete-btn"
						onClick={() => props.deleteBounty(_id)}>
						delete
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
						first={firstName}
						last={lastName}
						_id={_id}
						amount={bountyAmount}
						type={type}
						btnText="Submit Edit"
						submit={props.editBounty}
						handleClose={setEditToggle}
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