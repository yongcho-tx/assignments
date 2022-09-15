import React from 'react'
import SearchMeds from './SearchMeds'


function SelectedMedsList(props) {
    const { selectedMeds } = props
    console.log("selectedMeds console: ", selectedMeds)
    // const selectedMedArr = selectedMeds.map(med => <h3 key={med.rxcui} {...med}>Name: {med.name} Rxcui: {med.rxcui} </h3>)
    const uniqueRxcui = []
    const uniqueSelectedMeds = selectedMeds.filter(med => {
        const isDuplicate = uniqueRxcui.includes(med.rxcui)

        if(!isDuplicate) {
            uniqueRxcui.push(med.rxcui)
            return true
        }
        return false
    })
    console.log(uniqueSelectedMeds)
    return (
        
        <div>
            { uniqueSelectedMeds.map(med => {
                return (
                    <div key={med.rxcui}>
                        <h3>Name: {med.name} Rxcui: {med.rxcui}</h3>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default SelectedMedsList