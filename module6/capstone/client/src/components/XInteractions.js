import React, { useContext, useEffect } from 'react'
import { DrugContext } from '../context/DrugProvider'


export default function XInteractions(props) {
    const { interactions } = useContext(DrugContext)


    return (
        <div>
            { interactions.length > 0 &&
                <h2>Interaction Description: { interactions } </h2>
            // :
                // <h1>No Interaction found</h1>
            }
        </div>
    )
}