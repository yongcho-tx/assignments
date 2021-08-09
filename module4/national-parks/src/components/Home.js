import React, { useState } from "react"
import ParksCard from "./ParksCard"
import styled from "styled-components"
import { ParksContext } from "../contexts/ContextProvider"

const Header = styled.h1`
text-align: center;
`

const ImgButton = styled.button`
width: 300px;
height: 100px;
`
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
margin: 2em;
`
const Home = () => {
    const [inputNumber, setInputNumber] = useState(1)
    return (
        <>
            <Header>Discover National Parks</Header>
            <h2>Input Number of Parks to View: <input type="number" value={inputNumber} onChange={(e) => setInputNumber(e.target.value)}></input></h2>
            <ParksCard 
            cardCount={parseInt(inputNumber)}
            />
        </>
    )
}

export default Home