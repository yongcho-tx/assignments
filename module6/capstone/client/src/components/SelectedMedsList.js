import React, { useContext, useState } from 'react'
import {DrugContext} from '../context/DrugProvider'

function SelectedMedsList(props) {
    const { selectedMeds, deleteMedList } = useContext(DrugContext)
    const { id } = props
    // console.log("selectedMeds console: ", selectedMeds)
    // const selectedMedArr = selectedMeds.map(med => <h3 key={med.rxcui} {...med}>Name: {med.name} Rxcui: {med.rxcui} </h3>)


    // const uniqueRxcui = []
    // const uniqueSelectedMeds = selectedMeds.filter(med => {
    //     const isDuplicate = uniqueRxcui.includes(med.rxcui)

    //     if(!isDuplicate) {
    //         uniqueRxcui.push(med.rxcui)
    //         return true
    //     }
    //     return false
    // })
    // console.log("unique selection: ", uniqueSelectedMeds)
    return (
        
        <div>
            {/* <div>
                { uniqueSelectedMeds.length > 0 &&
                <h1>Selected Meds List</h1>
                }
            </div>
            { uniqueSelectedMeds.map(med => {
                return (
                        <div key={med.rxcui}>
                            <h3>Name: {med.name} Rxcui: {med.rxcui}<span><button onClick={() => deleteMedList(med._id)}>Remove</button></span></h3>
                            
                        </div>
                    )
                })
            } */}
            <div>
                { selectedMeds.length > 0 && 
                    <h1>Selected Meds List</h1>
                }
                { selectedMeds.map(med => {
                    return (
                        <div key={med.rxcui}>
                            <h3>Name: {med.name} Rxcui: {med.rxcui} <span><button onClick={() => deleteMedList(med._id)}>Remove</button></span></h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default SelectedMedsList