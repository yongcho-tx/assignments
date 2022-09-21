import React, { useEffect, useContext } from 'react'
import { DrugContext } from '../context/DrugProvider.js'
import SelectedMedsList from './SelectedMedsList.js'

export default function Profile(props) {

    const { getMedList, selectedMeds } = useContext(DrugContext)
    // const mySelectedMedList = selectedMeds.map(med => <MedName {...med} key={med._id} />)


    useEffect(() => {
        console.log('useeffect ran')
        getMedList()
    }, [])


    return (
    
        <div>
           {/* {selectedMeds.map(med => <MedName name={med.name} key={med._id} />)} */}
           <SelectedMedsList />
        </div>
    )
}