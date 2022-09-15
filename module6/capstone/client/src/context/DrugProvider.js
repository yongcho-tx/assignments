import React from 'react'
import axios from 'axios'
export const DrugContext = React.createContext()


function DrugProvider(props) {


    return (
        <DrugContext.Provider>
            {props.children}
        </DrugContext.Provider>
    )
}

export default DrugProvider