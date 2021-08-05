import React, { useContext } from "react"
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
    const { randomizedData, setRandomizedData } = useContext(ParksContext)
    
    return (
        <>
            <Header>Discover National Parks</Header>
            <h2>Featured Parks (randomally load 30 parks)</h2>
            <ParksCard />
            <ButtonWrapper>
                <ImgButton>Get Parks</ImgButton>
            </ButtonWrapper>
        </>
    )
}

export default Home