import React from "react"

function ListCard(props) {
    const cardStyle = {
        position: "relative"
    }

    const imgStyle = {
        objectFit: "cover",
        width: "100%",
        height: "100%",
        display: "flex"
    }
    const targetNameStyle = {
        position: "absolute",
        bottom: "0",
        left: "0",
        background: "blue",
        color: "white",
        width: "100%",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        padding: ".5em 0 .5em 0",
        opacity: ".6",
        marginBottom: "0"
    }
    return (
        <div className="card-container" style={cardStyle}>
            <img src={props.card.image} style={imgStyle} alt={props.index}/>
            <h3 style={targetNameStyle}>{props.card.name}</h3>
        </div>
    )
}

export default ListCard