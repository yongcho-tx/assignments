import React, {useContext} from "react"
import { ThemeContext } from "../ContextProvider"

const Footer = () => {

    const {className} = useContext(ThemeContext)
    
    return (
        <div className={`${className}-theme`} id="footer" style={{display: "flex", justifyContent: "center"}}>
            <h2>The amazing footer</h2>
        </div>
    )
}

export default Footer