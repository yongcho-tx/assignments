import React, { useContext } from "react"
import { DrugContext } from "../context/DrugProvider"

function SelectedMedsList(props) {
  const { selectedMeds, deleteMedList } = useContext(DrugContext)

  const uniqueRxcui = []
  const uniqueSelectedMeds = selectedMeds.filter((med) => {
    const isDuplicate = uniqueRxcui.includes(med.rxcui)

    if (!isDuplicate) {
      uniqueRxcui.push(med.rxcui)
      return true
    }
    return false
  })
  console.log("unique selection: ", uniqueSelectedMeds)

  return (
    <div className="selectedmeds-container">
      <div className="selectedmedslist-header">
        {uniqueSelectedMeds.length > 0 && <h1>Selected Meds List</h1>}
      </div>
      {uniqueSelectedMeds.map((med) => {
        return (
          <div className="selectedmeds-layout" key={med.rxcui}>
            <h3>
              Name: {med.name} Rxcui: {med.rxcui}
              <span>
                <button onClick={() => deleteMedList(med._id)}>Remove</button>
              </span>
            </h3>
          </div>
        )
      })}
    </div>
  )
}

export default SelectedMedsList
