import { useDebounce } from '../hooks/debounceHook'
import React, { useState } from 'react'
import axios from 'axios'
export const DrugContext = React.createContext()

function DrugProvider(props) {

    const [searchQuery, setSearchQuery] = useState("")
    const [searchQuery2, setSearchQuery2] = useState("")
    const [noMedNames, setNoMedNames] = useState(false)
    const [medNames, setMedNames] = useState([])
    const [selectedMeds, setSelectedMeds] = useState([])
    const [isLoading, setLoading] = useState(false)



    const prepareSearchQuery = (query) => {
        const url = `https://rxnav.nlm.nih.gov/REST/drugs.json?name=${query}`
        return encodeURI(url)
    }

    const prepareCrossInteraction = (query) => {
        const url = `https://rxnav.nlm.nih.gov/REST/interaction/list.json?rxcuis=${query}`
    }

    const searchMedName = async () => {
        if(!searchQuery || searchQuery.trim() === "") return

        setLoading(true)
        setNoMedNames(false)

        const URL = prepareSearchQuery(searchQuery)

        const res = await axios.get(URL).catch((err) => {
            console.log("Error: ", err)
        })

        if(res) {
            console.log("Response: res.data", res.data)
            console.log("object length: ", Object.keys(res.data.drugGroup).length)
            // console.log("drugGroup: ", res.data.drugGroup.conceptGroup[res.data.drugGroup.conceptGroup.length-1].conceptProperties)
            Object.keys(res.data.drugGroup).length >= 2 ? setMedNames(res.data.drugGroup.conceptGroup[res.data.drugGroup.conceptGroup.length-1].conceptProperties)
            : setNoMedNames(true)
            }
        setLoading(false)
    }

    const searchCrossInteraction = () => {
        if(!searchQuery2 || searchQuery2.trim() === "") return

        setLoading(true)
        setNoMedNames(false)

        const URL = prepareCrossInteraction(searchQuery2)

        axios.get(URL)
            .then(res => {
                console.log(res.data)
            })
            setLoading(false)
            .catch(err => console.log(err))
        }

    const addMedList = (newMeds) => {
        axios.post("/rxlist", newMeds)
        .then(res => {
            console.log("i am res.data:", res.data)
            // const myMedList = [...selectedMeds, newMeds]
            setSelectedMeds(prevState => {
                console.log("Saved into setSelectedMeds", res.data)
                return [...prevState, newMeds]
            })
            //if res.data in put in, the data delay of 1 is visible for selectedMeds; newMeds is direct
        })
        .catch(err => console.log(err.response.data.errMsg))
        console.log("context line 55:", selectedMeds)
    }
    //this prevents the each keystroke of every keyword in the search
    useDebounce(searchQuery, 750, searchMedName)
   
    const getMedList = () => {
        axios.get("/rxlist" )
        .then(res => {
            setSelectedMeds(res.data)
        })
        .catch(err => console.log(err.respojnse.data.errMsg))
    }



    return (
        <DrugContext.Provider
            value={{
                setSearchQuery,
                noMedNames,
                setNoMedNames,
                medNames,
                setMedNames,
                setSelectedMeds,
                selectedMeds,
                isLoading,
                setLoading,
                addMedList,
                getMedList,
                searchQuery2
            }}
        >
            {props.children}
        </DrugContext.Provider>
    )
}

export default DrugProvider