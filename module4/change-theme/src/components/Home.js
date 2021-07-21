import React, {useContext} from "react"
import { ThemeContext } from "../ContextProvider"

const Home = () => {
    
    const {h1Style} = useContext(ThemeContext)

    return (
        <h1 style={h1Style}>This is the Home page</h1>
    )
}

export default Home