import styled from "styled-components"

const Wrapper = styled.div`
    height: 800px;
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