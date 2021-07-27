import React, { Link, Route, Switch } from "react-router-dom"
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
function App() {
  const navStyles = {
    display: "grid",
    textAlign: "center",
    gridTemplateColumns: "repeat(4, 1fr)",
    fontSize: "2em",
    border: "2px solid black"
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
              </Main>
          </Route>
          <Route path="/gallery">
              <Main>
                <Gallery />
              </Main>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/services">
            <Main>
              <Services />
            </Main> 
          </Route>
        </Switch>
        <Footer />
    </div>
  )
}
export default App;