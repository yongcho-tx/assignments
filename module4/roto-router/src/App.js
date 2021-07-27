import React, { Link, Route, Switch, useHistory } from "react-router-dom"
import About from "./components/About"
import Gallery from "./components/Gallery"
import Home from "./components/Home"
import Services from "./components/Services"
import Main from "./components/Main"
import Footer from "./components/Footer"
import './App.css';
import styled from "styled-components"

const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 2em;
`

const Button = styled.button`
    width: 150px;
    height: 50px;
`
function App() {
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
        <navbar style={navStyles}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/gallery">Gallery</StyledLink>
          <StyledLink to="/services">Services</StyledLink>
        </navbar>

        <Switch>
          <Route exact path="/">
              <Main>
                <Home />
              </Main>
          </Route>
          <Route path="/about">
              <Main>
                <About />
                <Button onClick={handleClick}>Click to go Home</Button>
              </Main>
          </Route>
          <Route path="/gallery">
              <Main>
                <Gallery />
                <Button onClick={handleClick}>Click to go Home</Button>
              </Main>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Main>
              <Services />
              <Button onClick={handleClick}>Click to go Home</Button>
            </Main> 
          </Route>
        </Switch>
        <Footer />
    </div>
  )
}
export default App;