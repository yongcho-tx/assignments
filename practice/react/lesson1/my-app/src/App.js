import React from "react"
import Product from "./Product"
import prod from "./vschoolProducts"

function App() {
    const productComponents = prod.map(item => <Product key={item.id} product={item}/>)
    
    return (
        <div>
            {productComponents}
        </div>
    )
}

export default App