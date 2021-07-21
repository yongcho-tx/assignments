import React, {useState} from "react"
const ThemeContext = React.createContext()

const ThemeContextProvider = props => {

    const [style, setTheme] = useState({
        className: "light",
        backgroundColor: "#ccccff",
        color: "#006500",
        isShift: false
    })
     
    const changeTheme = () => {
        setTheme(prevTheme => ({
            className: prevTheme.className === "light" ? "dark" : "light",
            backgroundColor: prevTheme.backgroundColor === "#ccccff" ? "gray" : "#ccccff",
            color: prevTheme.color === "#006500" ? "#ff9900" : "#006500",
            })
        )
    }
    const darkTheme = () => {
        setTheme({
            className: "dark",
            backgroundColor: "gray",
            color: "#ff9900"
            }
        )
    }
    const lightTheme = () => {
        setTheme({
            className: "light",
            backgroundColor: "#ccccff",
            color: "#006400"
            }
        )
    }
    const whackyTheme = () => {
        setTheme({
            className: "whacky",
            backgroundColor: "linear-gradient(to right, #fbd3e9, #bb377d)",
            color: "#ffffff",
            }
        )
    }

    const changeLayout = () => {
        setTheme(prevTheme => ({
            className: prevTheme.className === "light" ? "dark" : "light",
            backgroundColor: prevTheme.backgroundColor === "#ccccff" ? "gray" : "#ccccff",
            color: prevTheme.color === "#006500" ? "#ff9900" : "#006500",
            isShift: !prevTheme.isShift
            })
        )
    }
    const h1Style = {
        textAlign: "center",
    }

    return (
        <ThemeContext.Provider value={{...style, changeTheme, darkTheme, lightTheme, whackyTheme, changeLayout, h1Style}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext, ThemeContextProvider}
