import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const linkStyle = {
    margin: "1em",
    textDecoration: "none",
    color: "#ffffff",
    fontSize: "16px",
    fontFamily: "Arial"

  }

const StyledButton = styled.button`
    cursor: pointer;
    color: #ffffff;
    background-color: #343434;
    border: none;
    font-size: 16px;

    &:hover {
     background-color: #ffffff;
     color: black;
    }
`



export default function Navbar() {
    
    return (
        <div className="navbar">
            <Link to="/" style={linkStyle}>Home</Link>
            <Link to="profile" style={linkStyle}>Profile</Link>
            <Link to="search" style={linkStyle}>Search</Link>
            <StyledButton>Logout</StyledButton>
        </div>
    )
}

