import React from "react"
import Card from "./components/Card"
import cardData from "./vacationCard"
import "./styles.css"


function App() {
    const cardComponents = cardData.map((item, index) => <Card key={item.price} index={index} card={item}/>)
    return (
        <div className="main">
            <header className="navbar">
                <h1>Exciting Vacation Spots</h1>
            </header>
            <div className="card-container">
                {cardComponents}
            </div>
        </div>
    )
}

export default App