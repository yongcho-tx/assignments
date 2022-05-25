import styled from "styled-components"

const Wrapper = styled.div`
    height: 800px;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const Main = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Main