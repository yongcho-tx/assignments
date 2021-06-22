import React from "react"
import Pets from "./Pets"

function Friend(props) {
    return (
        <div className="friend-item">
            <h3>Name: {props.friend.name}</h3>
            <p>Age: {props.friend.age}</p>
            <p>
                <span style={{fontWeight: "bold"}}>Pets</span> 
                {props.friend.pets.map(pet => <Pets key={pet.breed} furryfriends={pet}/>)}
            </p>
        </div>
    )
}

export default Friend