import React, { useEffect, useContext } from 'react'
import { DrugContext } from '../context/DrugProvider.js'
import SelectedMedsList from './SelectedMedsList.js'
import SearchMeds from './SearchMeds.js'

export default function Profile(props) {

    const { getMedList, selectedMeds, searchQuery2 } = useContext(DrugContext)



    useEffect(() => {
        console.log('useeffect ran')
        getMedList()
    }, [])


    const rxcuiCollection = selectedMeds.map((med, i) => {
        let newArr = ""
        for (i = 0; i < med.length-1; i++) {
            newArr += med[i] + "+"
            
        }
    })
    console.log(rxcuiCollection)

    console.log("selectedMeds map: ", selectedMeds.map(drug => drug.rxcui+"+"))
    console.log(rxcuiCollection)
    return (
    

        <div>
           <SelectedMedsList />
           <div>
                {selectedMeds.map((med) => med.rxcui+"+")}
           </div>
        </div>
    )
}