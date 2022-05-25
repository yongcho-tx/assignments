import styled from "styled-components"

const Wrapper = styled.div`
    height: 300px;
    text-align: center;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Footer = () => {
    return (
        <Wrapper>
            <h2>This is a footer</h2>
        </Wrapper>
    )
}

export default Footer