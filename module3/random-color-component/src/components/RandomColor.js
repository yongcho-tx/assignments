import React from "react"
import "../RandomColor.css"

function RandomColor(props) {
    let color = props.ranColors.hex
    color = "#"+color
    console.log(`The Hex Code is: ${color.toUpperCase()}`)

    return (
        <div className="square" style={{background: color}}>

        </div>
    )
}

export default RandomColor