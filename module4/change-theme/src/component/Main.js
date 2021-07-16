import React, {useContext} from "react"
import {ThemeContext} from "../ContextProvider"
import Btn from "./Button"

const Main = props => {

    const {backgroundColor, color} = useContext(ThemeContext)

    return (

        <div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", background: backgroundColor}}>
                <h2 style={{color, padding: "1em"}}>Click the button to toggle the theme</h2>
                <Btn />

        </div>
    )
}

export default Main