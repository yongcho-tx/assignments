import React, { useContext } from 'react'
import { DrugContext } from '../context/DrugProvider'


export default function XInteractions(props) {
    const { interactions } = useContext(DrugContext)
    return (
        <div>
            { interactions.length > 0 ?
                <h1>Interaction Description: { interactions } </h1>
            :
                <h1>No Interaction found</h1>
            }
        </div>
    )
}