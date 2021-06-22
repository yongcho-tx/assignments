import React from "react"
import Navbar from "./Navbar"

function Header() {
    return (
        <div className="header">
            <Navbar />
            <header>
                <div className="site-header">
                    <h1>Clean Blog</h1>
                    <span className="sub-header">A Blog Theme by Start Bootstrap</span>
                </div>  
            </header>
             
        </div>
        
    )
}

export default Header