import './App.css';
import Home from "./components/Home"
import Stats from "./components/Stats"
import ParksByState from "./components/ParksByState"
import React, { Link, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <header>
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
        <Link to="/parksbystate">List of Parks By State</Link>
      </header>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        {/* <Route path="/stats">
          <Stats />
        </Route> */}
        <Route path="/parksbystate">
          <ParksByState />
        </Route>
      </Switch>
    </div>
  )
}

export default App;
