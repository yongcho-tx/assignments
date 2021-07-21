import React, {useContext} from "react"
import {ThemeContext} from "../ContextProvider"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom"
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"


const NavBar = props => {

    const {className, isShift} = useContext(ThemeContext)
    const linkStyle = {
        textDecoration: "none",
    }

    return (
        <div>
        
            {isShift ? 

            <div>
                <Router>
                    <header className="atag-header">
                        <Link style={linkStyle} to="/">Home</Link>
                        <Link style={linkStyle} to="/about">About</Link>
                        <Link style={linkStyle} to="/contact">Contact</Link>
                    </header>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/about">
                            <About />
                        </Route>
                        <Route path="/contact">
                            <Contact />
                        </Route>
                    </Switch>
                </Router>
            </div>
    
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