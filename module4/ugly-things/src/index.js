import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {UglyContextProvider} from "./ContextProvider"


ReactDOM.render(
  <React.StrictMode>
    <UglyContextProvider>
    <App />
    </UglyContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
