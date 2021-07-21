import { useContext } from 'react';
import UglyCard from "./UglyCard"
import {UglyContext} from "../ContextProvider"
import "../App.css"

const UglyList = () => {

const {deleteUglyItem, uglyItem, editUgly} = useContext(UglyContext)

const uglyComponent = uglyItem.map(item => 
    <UglyCard
    deleteCard={(e) => deleteUglyItem(item._id, e)}
    key={item._id} 
    title={item.title} 
    url={item.imgUrl} 
    desc={item.description} 
    id={item._id}
    isEdit={item.isEdit}
    submit={editUgly}
    />)

    return (
        <div className="card-container">
                {uglyComponent}
        </div>
    )
}

export default UglyList