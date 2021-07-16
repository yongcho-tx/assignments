import React, {useContext} from "react"
import {ThemeContext} from "../ContextProvider"


const NavBar = props => {

    const {className, isShift} = useContext(ThemeContext)

    return (
        <div>
        
            {isShift ? 
        
            <header className="atag-header">
                <a href="/#">Home</a>
                <a href="/#">About</a>
                <a href="/#">Contact</a>
            </header>
    
                : 
            <header className={`${className}-theme`}>
                <ul style={{listStyle: "none", display: "flex", justifyContent: "space-evenly"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </header>
            }              
        </div>
        
    )
}

export default NavBar