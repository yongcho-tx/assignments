// import React, { useState, useEffect } from 'react'

import Product from './components/Product.js'
import AddProductForm from './components/AddProductForm.js'
import Home from './components/Home.js'
import Main from './components/Main'
import AddProductPage from './components/AddProductPage'
import Footer from './components/Footer'
import ProductGalleryPage from './components/ProductGalleryPage'
import React, { Link, Route, Switch, useHistory } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 2em;
`
const Button = styled.button`
    width: 150px;
    height: 50px;
`

export default function App() {
    const navStyles = {
        display: "grid",
        textAlign: "center",
        gridTemplateColumns: "repeat(4, 1fr)",
        fontSize: "2em",
        border: "2px solid black"
      }
      const history = useHistory()
      const handleClick = () => {
          setTimeout(() => {
              history.push("/")
          }, 1000)
      }
    return (
        <div>
            <div>
                <navbar style={navStyles}>
                    <Link to="/">Home</Link>
                    <Link to="/addproduct">Add Products</Link>
                    <Link to="/productgallery">Product Gallery</Link>
                </navbar>

                <Switch>
                    <Route exact path="/">
                        <Main>
                            <Home />
                        </Main>
                    </Route>
                    <Route path="/addproduct">
                        <Main>
                            <AddProductPage />
                            <Button onClick={handleClick}>Click to go Home</Button>
                        </Main>
                    </Route>
                    <Route path="/productgallery">
                        <Main>
                            <ProductGalleryPage />
                            <Button onClick={handleClick}>Click to go Home</Button>
                        </Main>
                    </Route>
                </Switch>
                <Footer />
             </div>
        </div>
    )
}