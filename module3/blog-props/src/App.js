import React from "react"
import "./styles.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import BlogList from "./components/BlogList"


function App() {
    return (
        <div className="main">
            <Header />
            <div className="container">
                <BlogList />
                <div className="button">
                    <button>Older Posts →</button>
                </div>
            </div>
            <Footer />
        </div>
    )
}


export default App