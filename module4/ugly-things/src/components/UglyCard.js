import React from "react"
import {useContext} from "react"
import {UglyContext} from "../ContextProvider"
import UglyForm from "./UglyForm"

function UglyCard(props) {

    const { toggleEdit, inputValues} = useContext(UglyContext)

        return (
            <div>

            {props.isEdit ?
                <div className="edit-ugly-card">
                    <img src={props.url} alt={props.id} style={{maxWidth: "100%", height: "250px"}}/>
                    <UglyForm
                    title={inputValues.title}
                    toggleEdit
                    isEdit={props.isEdit}
                    id={props.id}
                    />
                    <button className="cancel-edit-btn" onClick={() => toggleEdit(props.id)}>Cancel Edit</button>

                </div>
            
            :
                <div className="ugly-card">
                    <h1>{props.title}</h1>
                    <p>{props.desc}</p>
                    <img src={props.url} alt={props.id} style={{maxWidth: "100%", height: "250px"}}/>
                    <div className="btn-container">
                        <button className="edit-ugly-btn" onClick={() => toggleEdit(props.id)}>Edit Ugly</button>
                        <button className="edit-del-btn" onClick={props.deleteCard}>Delete</button>
                    </div>
                </div>
            
            }
            </div>
        )
}

export default UglyCard