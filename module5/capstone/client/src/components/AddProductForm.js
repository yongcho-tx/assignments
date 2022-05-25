import React, { useState } from 'react'

export default function AddProductForm(props) {
    const initialInputs = { item: props.item || "", features: props.features || "", price: props.price || "", pros: props.pros || "", cons: props.cons || "", addOns: props.addons || "", caveats: props.caveats || "", comments: props.comments || "", category: props.category|| ""}
    const [inputs, setInputs] = useState(initialInputs)

    const handleChange = e => {
        const { name, value } = e.target
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.submit(inputs, props._id)
        console.log(inputs)
        setInputs(initialInputs)
        if(props.handleClose) {
            props.handleClose(false)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            name="item"
            value={inputs.item}
            onChange={handleChange}
            placeholder="Item/Product"/>
            <input
            type="text"
            name="features"
            value={inputs.features}
            onChange={handleChange}
            placeholder="Features"/>
            <input
            type="text"
            name="price"
            value={inputs.price}
            onChange={handleChange}
            placeholder="Price"/>
            <input
            type="text"
            name="pros"
            value={inputs.pros}
            onChange={handleChange}
            placeholder="Pros"/>
            <input
            type="text"
            name="cons"
            value={inputs.cons}
            onChange={handleChange}
            placeholder="Cons"/>
            <input
            type="text"
            name="caveats"
            value={inputs.caveats}
            onChange={handleChange}
            placeholder="Caveats"/>
            <input
            type="text"
            name="category"
            value={inputs.category}
            onChange={handleChange}
            placeholder="Category"/>
            <input
            type="text"
            name="comments"
            value={inputs.comments}
            onChange={handleChange}
            placeholder="Comments"/>
            <button>{ props.btnTxt } </button>
        </form>
    )
}

