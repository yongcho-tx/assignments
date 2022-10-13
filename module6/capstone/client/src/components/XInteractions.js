import React, { useContext, useState } from 'react'
import { DrugContext } from '../context/DrugProvider.js'
import Popup from './Popup.js'
import Auth from './Auth.js'

export default function XInteractions(props) {
    const { interactions } = useContext(DrugContext)
    const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <div>
            { interactions.length > 0 &&
                <>
                <h2>Interaction Description: { interactions } <span><button onClick={() => setButtonPopup(true)}>Save to Profile</button></span></h2>
           
                 </>
            }
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
        </div>
    )
}