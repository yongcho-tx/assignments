import React from "react"
import FriendList from "./components/FriendList"
import "./styles.css"

function App() {
    return (
        <div className="main">
            <header>
                <h1>Friends with Pets</h1>
            </header>
            <div className="friend-container">
                <FriendList />
            </div>
        </div>
       
    )
}

export default App
