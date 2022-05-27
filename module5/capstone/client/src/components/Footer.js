import styled from "styled-components"

const Wrapper = styled.div`
    height: 300px;
    text-align: center;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Footer = () => {
    return (
        <Wrapper>
            <h3 className="footer-logo">Productspot</h3>
            <h5 className="copyright">Copyright 2022 ProductSpot Inc.</h5>
        </Wrapper>
    )
}

export default Footer