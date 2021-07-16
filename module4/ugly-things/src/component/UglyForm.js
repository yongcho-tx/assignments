import {useContext} from "react"
import {UglyContext} from "../ContextProvider"


function UglyForm(props) {

    const {handleChange, inputValues, handleSubmit, editUgly} = useContext(UglyContext)

    return (
        <div className="input-container">
            <form className="input-form" onSubmit={(e) => {
                
                    if(!props.isEdit) {
                        return handleSubmit(e)
                    } else {
                        
                        return editUgly(props.id, e)
                    }
                }   
            }
                >
                <input
                type="text"
                name="title"
                value={inputValues.title}
                placeholder="Title"
                onChange={handleChange}
                />
                <input
                type="text"
                name="description"
                value={inputValues.description}
                placeholder="Description"
                onChange={handleChange}
                />
                {!props.isEdit?
                <input
                type="text"
                name="imgUrl"
                value={inputValues.imgUrl}
                placeholder="Img URL"
                onChange={handleChange}
                />
                :null}
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div>
    )

}


export default UglyForm