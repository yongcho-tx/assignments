import React, { useEffect, useState } from 'react'
import { MedName } from './MedName.js'

export default function Profile(props) {
    const { selectedMeds, setSelectedMeds, getSelectedMeds } = props
    // const mySelectedMedList = selectedMeds.map(med => <SelectedMedsList {...med} key={med._id}/>)

    // useEffect(() => {
    //     console.log('useeffect ran')
    //     getSelectedMeds()
    // }, [])

    console.log("new console.log:", selectedMeds)

    return (
    
        <div>
            <MedName />
        </div>
    )
}