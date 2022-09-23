import React, { useContext } from 'react'
import { DrugContext } from '../context/DrugProvider'


export default function XInteractions(props) {
    const { interactions } = useContext(DrugContext)
    return (
        <div>
            <h1>Interaction Description: { interactions } </h1>
        </div>
    )
}