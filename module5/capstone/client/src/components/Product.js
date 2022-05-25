import React, { useState } from 'react'
import AddProductForm from './AddProductForm.js'

export default function Product(props) {
    const { item, features, price, pros, cons, caveats, category, addOns, comments, _id } = props
    const [editToggle, setEditToggle] = useState(false)
    return (
        <div className="product-square">
            { !editToggle ?
                <>
                    <h3>Item: { item } </h3>
                    <h4>Features: { features } </h4>
                    <h4>Price: { price } </h4>
                    <h4>Cons: { cons } </h4>
                    <h4>Pros: { pros } </h4>
                    <h4>Caveats: { caveats } </h4>
                    <h4>Category: { category } </h4>
                    <h4>Addons: { addOns } </h4>
                    <h4>Comments: { comments } </h4>
                    <button
                        onClick={() => props.deleteProd(_id)}>
                        Delete
                    </button>
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Edit
                    </button>
                </>
            :
                <>
                    <AddProductForm
                        item={item}
                        features={features}
                        price={price}
                        pros={pros}
                        cons={cons}
                        caveats={caveats}
                        category={category}
                        addOns={addOns}
                        comments={comments}
                        _id={_id}
                        btnTxt="Submit Edit"
                        submit={props.editProd}
                        handleClose={setEditToggle}
                    />
                    <button
                        onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                        Close
                    </button>
                </>
        }
        </div>
    )
}