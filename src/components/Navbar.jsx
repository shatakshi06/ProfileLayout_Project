import styled from 'styled-components'

const NavBarWrapper = styled.nav`
    background: #63D471;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 80px;
    margin-top: 0px;
    z-index: 1;
    position: fixed;
    top: 0;
`

export const Navbar = () => {
    return (
        <NavBarWrapper>
            <h1>Shatakshi Jain</h1>
        </NavBarWrapper>
    )
}