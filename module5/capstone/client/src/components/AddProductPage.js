import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product.js'
import AddProductForm from './AddProductForm.js'



export default function AddProductPage() {
    const [ products, setProducts ] = useState([])

    const getProducts = () => {
        axios.get('/products')
        .then(res => setProducts(res.data))
        .catch(err => console.log(err))
    }

    const addProduct = newProduct => {
        axios.post('/products', newProduct)
        .then(res => {
            setProducts(prevProducts => [...prevProducts, res.data])
        })
        .catch(err => console.log(err))
    }

    const deleteProduct = productId => {
        axios.delete(`/products/${productId}`)
        .then(res => {
            setProducts(prevProducts => prevProducts.filter(product => product._id !== productId))
        })
        .catch(err => console.log(err))
    }

    const editProduct = (updates, productId) => {
        axios.put(`/products/${productId}`, updates)
        .then(res => {
            setProducts(prevProducts => prevProducts.map(product => product._id !== productId ? product : res.data))
        })
        .catch(err => console.log(err))
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <div>

            <div className="addproducts-wrapper">
                <AddProductForm
                    submit={addProduct}
                    btnTxt="Add Product"
                />
            {/* { products.map(product => 
                <Product
                    {...product}
                    key={product._id}
                    //deleteProd is the name of prop used in Product component; deleteProduct is the function at top of page
                    deleteProd={deleteProduct}
                    editProd={editProduct}
                />)} */}
            </div>
        </div>
    )
}
