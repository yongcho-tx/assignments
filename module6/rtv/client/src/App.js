import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import Home from './components/Home.js'
import Auth from './components/Auth.js'
import Navbar from './components/Navbar.js'
import Profile from './components/Profile.js'
import Public from './components/Public.js'
import { UserContext } from './context/UserProvider.js'


export default function App() {

  const { token, logout } = useContext(UserContext)
  return (
    <div>
      <Navbar logout={logout}/>
      <Routes>
        <Route 
          path="/" 
          element={ token? <Navigate to="/profile" /> : <Auth /> }
        />
        <Route 
          path="/profile"
          element={<Profile />}
        />
        <Route 
          path="/public"
          element={<Public />}
        />
      </Routes>
    </div>

  );
}

