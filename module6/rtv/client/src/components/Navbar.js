import React from 'react'
import { Link } from 'react-router-dom'

const linkStyle = {
  margin: "1em",
  textDecoration: "none",
  color: "white"
}

const Navbar = (props) => {
  const { logout } = props
  return (
    <div className="navbar">
      <Link to="/profile" style={linkStyle}>Profile</Link>
      <Link to="/public" style={linkStyle}>Public</Link>
      <button onClick={logout} className='btn--loggout'>Logout</button>
    </div>
  )
}

export default Navbar