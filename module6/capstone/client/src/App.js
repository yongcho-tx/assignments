import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import SearchMeds from './components/SearchMeds.js'
import XInteractions from './components/XInteractions.js'
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import styled from 'styled-components'
import Navbar from './components/Navbar.js'
import Auth from './components/Auth.js'
import { UserContext } from './context/UserProvider.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const AppContainer = styled.div`
  width: 100%;
  height; 100%;
  display: flex;
  justify-content: center;
  margin-top: 8em;
`

function App() {

  const { token, logout } = useContext(UserContext)

  return (
    <div>
        <Navbar logout={logout}/>
        <AppContainer>
          <Routes>
            <Route
              path="/"
              element={ token ? <Navigate to="/profile" /> : <Auth /> }
            />
            <Route 
              path="/search"
              element={ <SearchMeds />}
            />
            <Route 
              path="/interactions"
              element={ <XInteractions /> }
            />
            <Route 
              path="/profile"
              element={ <Profile /> }
            />
          </Routes>
        </AppContainer>
    </div>
  );
}

export default App;
