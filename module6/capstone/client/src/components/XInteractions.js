import React, { useContext, useState } from 'react'
import { DrugContext } from '../context/DrugProvider.js'
import LoginPopup from './LoginPopup.js'
import SaveListPopup from './SaveListPopup.js'


export default function XInteractions(props) {
    const { interactions, token } = useContext(DrugContext)
    const [buttonPopup, setButtonPopup] = useState(false)

    return (
        <div>
            { interactions.length > 0 &&
                <>
                <h2>Interaction Description: { interactions } <span><button onClick={() => setButtonPopup(true)}>Save to Profile</button></span></h2>
                <LoginPopup trigger={buttonPopup} setTrigger={setButtonPopup}/>
                </>
            }    
            
            { interactions.length > 0 && token &&
                 <>
                 <h2>Interaction Description: { interactions } <span><button onClick={() => setButtonPopup(true)}>Save to Profile</button></span></h2>
                 <SaveListPopup trigger={buttonPopup} setTrigger={setButtonPopup}/>
                 </>
            }
                
        </div>
    )
}