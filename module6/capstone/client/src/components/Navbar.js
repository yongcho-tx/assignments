import { Link } from "react-router-dom"
import styled from "styled-components"

const linkStyle = {
  margin: "1em",
  textDecoration: "none",
  color: "#ffffff",
  fontSize: "16px",
  fontFamily: "Arial",
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

function Navbar(props) {
  const { logout, token } = props

  return (
    <div className="navbar">
      <Link to="/" style={linkStyle}>
        Home
      </Link>
      {token && (
        <Link to="profile" style={linkStyle}>
          Profile
        </Link>
      )}
      <Link to="search" style={linkStyle}>
        Search
      </Link>
      {token && <StyledButton onClick={logout}>Logout</StyledButton>}
    </div>
  )
}

export default Navbar
