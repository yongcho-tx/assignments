import React, { useContext } from "react"
import { ThemeContext } from "../ContextProvider"

const About = () => {

    const {h1Style} = useContext(ThemeContext)
   
    return (
        <h1 style={h1Style}>This is the about page</h1>
    )
}

export default About