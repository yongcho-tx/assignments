import styled from "styled-components"

const Wrapper = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #6495ED;
`
const Main = (props) => {
    return (
        <Wrapper>
            {props.children}
        </Wrapper>
    )
}

export default Main