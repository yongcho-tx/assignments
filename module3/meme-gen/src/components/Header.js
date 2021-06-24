import React from "react"

function Header() {
    const headerStyle = {
        padding: "1.5em",
        textAlign: "center",
        background: "#1abc9c",
        color: "white",
        fontSize: "1.5em"
    }
    return(
        <div className="header" style={headerStyle}>
            <h1>Meme Generator</h1>
        </div>
    )
}

export default Header