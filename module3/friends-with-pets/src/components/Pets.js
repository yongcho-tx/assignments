import React from "react"

function Pets(props) {
    return (
        <div>
            <p>Name: {props.furryfriends.name}</p>
            <p>Breed: {props.furryfriends.breed}</p>
        </div>
    )
}

export default Pets