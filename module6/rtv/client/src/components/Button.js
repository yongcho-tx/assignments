import { PromiseProvider } from 'mongoose'
import React from 'react'


export default function Button(props) {
    return (
        <div>
            <button>{props.button}</button>
        </div>
    )
}

