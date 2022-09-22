import React, { useContext } from 'react'
import { DrugContext } from '../context/DrugProvider'


export default function XInteractions(props) {
    const { interactions } = useContext(DrugContext)
    return (
        <div>
            <h4>Interaction Description: { interactions } </h4>
        </div>
    )
}