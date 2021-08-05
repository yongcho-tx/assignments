import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ParksContextProvider } from "./contexts/ContextProvider"
import { BrowserRouter as Router } from "react-router-dom"


ReactDOM.render(
  <React.StrictMode>
    
      <ParksContextProvider>
        <Router>
          <App />
        </Router>
      </ParksContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)