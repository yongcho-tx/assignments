
import Home from './components/Home.js'
import Main from './components/Main'
import HomeBody from './components/HomeBody'
import AddProductPage from './components/AddProductPage'
import Footer from './components/Footer'
import ProductGalleryPage from './components/ProductGalleryPage'
import React, { Link, Route, Switch, useHistory } from 'react-router-dom'
import styled from 'styled-components'


const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 2em;
  color: #ffffff;
`
const Button = styled.button`
    width: 150px;
    height: 50px;
`

export default function App() {
    const navStyles = {
        display: "grid",
        textAlign: "center",
        gridTemplateColumns: "repeat(3, 1fr)",
        fontSize: "2em",
        border: "2px solid black",
        backgroundColor: "#2c2c2c"
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
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/addproduct">Add New Products</StyledLink>
                    <StyledLink to="/productgallery">Product Gallery</StyledLink>
                </navbar>

                <Switch>
                    <Route exact path="/">
                        <HomeBody>
                            <Home />
                        </HomeBody>
                        <Footer />
                    </Route>
                    <Route path="/addproduct">
                        <Main>
                            <AddProductPage />
                            <Button onClick={handleClick}>Click to go Home</Button>
                        </Main>
                        <Footer />
                    </Route>
                    <Route path="/productgallery">
                        <Main>
                            <ProductGalleryPage />
                            <Button onClick={handleClick}>Click to go Home</Button>
                        </Main>
                    </Route>
                </Switch>
             </div>
        </div>
    )
}