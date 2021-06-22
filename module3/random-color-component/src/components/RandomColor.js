import React from "react"
import "../RandomColor.css"

function RandomColor(props) {
    let color = props.ranColors.hex
    color = "#"+color
    console.log(color)
    console.log(props.ranColors.timestamp)
    return (
        <div className="square" style={{background: color}}>

        </div>
    )
}

export default RandomColor