import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {

    return (
        <div className="navbar">
            <Link to="profile" className="link">Profile</Link>
            <Link to="search" className="link">Search</Link>
            <Link to="/" className="link">Home</Link>
            <button>Logout</button>
        </div>
    )
}