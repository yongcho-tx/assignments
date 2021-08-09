import React, { useContext, useEffect, useState } from "react"
import { ParksContext } from "../contexts/ContextProvider"
import styled from "styled-components"

//when going back, data does not load without a refresh

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
const ImgButton = styled.button`
width: 120px;
height: 50px;
margin: 1em;
`
const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
margin: 2em;
`
const ParksCard = (props) => {


    const { parksData } = useContext(ParksContext)
    const [startingPosition, setStartingPosition] = useState(0)
    const [parkView, setParkView] = useState()
    const [trialRandParks, setTrialRandParks] = useState([])
    const [parkHistory, setParkHistory] = useState([])
    const [showHistory, setShowHistory] = useState(false)

//     const scanHistory = () => {
//         let random = parkHistory[Math.floor(Math.random()*parkHistory.length)]
//         randParks.push(random)
//         showHistory
// }
    

    const randomParks = (limit) => {
            let randParks = []
            if(parksData.length > 0) {
            for(let i = startingPosition; i < limit+startingPosition; i++) {
                let random = parksData[Math.floor(Math.random()*parksData.length)]
                randParks.push(random)
            }
        }
        //console.log(randParks)


        //return displayParks(randParks)
        //console.log(randParks)
        setParkHistory(prevHistory => [...prevHistory, ...randParks])
        console.log(parkHistory)
        return setTrialRandParks(randParks)
        
    }

    //const displayParks = (randomParksArr) => randomParksArr.map(park => {
       const displayParks = showHistory? 
       parkHistory && parkHistory.map((park, index) => {
        //console.log(randomParksArr)
        //if(props.cardCount === index) {
        if(props.cardCount === props.cardCount) {
        console.log(index)
        
         return (
            
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
        
        )}
    })
       :
       
       trialRandParks && trialRandParks.map(park => {
        //console.log(randomParksArr)
        return (
            
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
    })

    useEffect(() => {
        setShowHistory(prevHistory => false)
        randomParks(props.cardCount)
    }, [props.cardCount])
    
    return (
        <>
            { parksData.length <= 0 ? <p>Is loading</p> 
            :
            <>
            <CardContainer>
            {/* {console.log(randomParks(props.cardCount))} */}
                {/* {randomParks(props.cardCount)} */}
                {displayParks}
               
            </CardContainer>
            <ButtonWrapper>
                {/* <ImgButton onClick={() => setStartingPosition(prevStartingPosition => {
                   
                    console.log(prevStartingPosition+props.cardCount) 

                    return prevStartingPosition+props.cardCount})}>New Parks</ImgButton> */}
                

                <ImgButton onClick={() => randomParks(props.cardCount)}>More Parks</ImgButton>

                <ImgButton onClick={() => setShowHistory(prevHistory => true)}>Parks in History</ImgButton>
            </ButtonWrapper>
            </>
            }
        </>
    )
}

export default ParksCard