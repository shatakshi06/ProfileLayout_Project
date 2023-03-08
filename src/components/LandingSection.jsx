import styled from 'styled-components'
import { ButtonContainer } from './ButtonContainer'
import { ParentSection } from './ParentSection'

const LandingSectionWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`

export const LandingSection = () => {
    return (
        <LandingSectionWrapper>
            <ParentSection>
                <div className = 'profileInsideDetailsBox' >
                    <h1>Shatakshi Jain</h1>
                    <p>I am a JAVA Developer. I know how to write code in JAVA.</p>
                    <ButtonContainer/>
                </div>
            </ParentSection>
            <ParentSection>
                <div className="profileInsideDetailsBox">
                    <img src='../src/assets/mypic.jpeg' alt=''/>/        
                </div>
            </ParentSection>
        </LandingSectionWrapper>
    )
}