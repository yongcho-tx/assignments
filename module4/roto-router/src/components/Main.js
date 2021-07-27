import styled from "styled-components"
import Home from "./Home"

const Wrapper = styled.div`
    height: 800px;
    border: 2px solid black;
    display: felx;
    justify-content: center;
    align-items: center
`
const Title = styled.h2`
    text-align: center;
`
const Main = (props) => {
    return (
        <Wrapper>

            {props.children}
        </Wrapper>
    )
}

export default Main