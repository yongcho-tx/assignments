import React from "react"
import "./App.css"
import NavBar from "./component/NavBar"
import Footer from "./component/Footer"
import Main from "./component/Main"
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