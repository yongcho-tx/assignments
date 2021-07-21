import React, { useContext } from "react"
import { ThemeContext } from "../ContextProvider"

const Contact = () => {

    const {h1Style} = useContext(ThemeContext)

    return (
        <h1 style={h1Style}>This is the Contact page</h1>
    )
}

export default Contact