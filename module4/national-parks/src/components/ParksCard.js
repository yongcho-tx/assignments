import React, { useContext, useEffect, useState } from "react"
import { ParksContext } from "../contexts/ContextProvider"
import styled from "styled-components"

const CardContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 2em;
`
const ParkCard = styled.div`
border: 2px solid black;
width: 400px;
padding: 1em;
`
const ParkLink = styled.a`
text-decoration: none;
`
const CardImg = styled.img`
height: 250px;
width: 100%;
object-fit: contain;
`
// const randomImages = randomizedData.map(card => card.images[Math.floor(Math.random()*card.images.length)])

const ParksCard = () => {


    const { parksData, randomizedData } = useContext(ParksContext)
    
//     const randomParks =  () => {
//         let randParks = []
//         for(let i = 0; i < 5; i++) {
//             let random = newData[Math.floor(Math.random()*newData.length)]
//             randParks.push(random)
//         }
//     return randParks
// }
// console.log(randomParks())



    const displayParks = randomizedData.map(park =>
            <ParkCard key={park.id}>
            <h2><ParkLink href={park.url}>{park.fullName}</ParkLink>, <span>{park.states}</span></h2>
            <p>{park.description}</p>
            <CardImg src={park.images[0].url}/>
            <label>Want to Visit?<input 
                type="checkbox"
                value="Want to visit"
            />
            </label>
            <label>
                Visited?
            <input 
                type="checkbox"
                value="value"
            />
            </label>
        </ParkCard>
    )

    return (
        <CardContainer>
            {displayParks}
        </CardContainer>
    )
}

export default ParksCard