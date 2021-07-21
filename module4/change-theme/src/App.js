import React from "react"
import "./App.css"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"
import Main from "./components/Main"
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
    return (
        <>
            <NavBar />
            <Main /> 
            <Footer />
        </>

    )
}

export default App