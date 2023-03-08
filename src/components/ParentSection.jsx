import styled from 'styled-components'

const ParentSectionWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100vh;
`

export const ParentSection = () => {
    return (
        <ParentSectionWrapper/>
    )
}