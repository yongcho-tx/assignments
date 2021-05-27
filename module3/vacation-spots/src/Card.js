import React from "react"


function Card(props) {
    return (
        <div className="card-item" style={{background: props.card.timeToGo === "Summer" ? "red" : props.card.timeToGo === "Spring" ? "#E8F3E8"
    : props.card.timeToGo === "Fall" ? "orange" : "lightblue"}}>
            <h2>Destination: {props.card.place}</h2>
            <p>Price: {props.card.price <= 500 ? `$${props.card.price}` : props.card.price > 500 && props.card.price <= 1000 ? `$$${props.card.price}` 
            : `$$$${props.card.price}`}</p>
            {/* <p style={{background: props.card.timeToGo === "Summer" ? "red" : props.card.timeToGo === "Spring" ? "green"
            : props.card.timeToGo === "Fall" ? "orange" : "lightblue" }}>Time To Go: {props.card.timeToGo}</p> */}
            <p>Time To Go: {props.card.timeToGo}</p>
            <img src={props.card.imgUrl}></img>
        </div>
    )
}


export default Card