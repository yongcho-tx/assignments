import React, { useState, useEffect } from "react"
import axios from "axios"
const ParksContext = React.createContext()



const ParksContextProvider = props => {

    const [parksData, setParksData] = useState([])
    const [randomizedData, setRandomizedData] = useState([])

    const getData = () => {
        axios.get(`https://developer.nps.gov/api/v1/parks?&limit=465&${key}`)
        .then(res => {
            const parks = res.data
            console.log(parks)
            console.log(parks.data)
            setParksData(parks.data)
        //     const randomParks = () => {
        //         let randParks = []
        //         for(let i = 0; i < 6; i++) {
        //             let random = parks.data[Math.floor(Math.random() * parks.data.length)]
        //             randParks.push(random)
        //         }
        //     return randParks
        // }
        //     setRandomizedData(randomParks())
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        console.log("useEffect was called")
        getData()
    }, [])



    return (
        <ParksContext.Provider value = {{getData, parksData, randomizedData, setRandomizedData}}>
            {props.children}
        </ParksContext.Provider>
    )
}

export { ParksContext, ParksContextProvider }

