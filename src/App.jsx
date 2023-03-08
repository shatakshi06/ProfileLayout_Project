import './App.css'
import styled from 'styled-components'
import { Navbar } from './components/Navbar'

const LandingSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`
const ParentSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 100vh;
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin: 80px
`

const Button = styled.button`
  height: 50px;
  width: 80px;
  background: white;
  border: 1px solid black;
  color: black;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left:10px;
  justify-content: center
`
const DivWrap = styled.div`
  padding: 40px;
`

const Img = styled.img`
  height: 400px;
  width: 400px;
`

// Note: Create a diff component for Landing Section.
// Import both the components.
// Nav bar has to be given position: fixed and top = 0 z index: 1

function App() {
  return (
    <>
    <Navbar></Navbar>
    <LandingSection className="App">
      <ParentSection className="parent">
        <div className="insideBlock">
          <h1>Shatakshi Jain</h1>
          <p>I am a JAVA Developer. I know how to write code in JAVA.</p>
          <ButtonContainer>
            <Button name='first'>My Resume</Button>
            <Button name='second'>Hire Me </Button>
          </ButtonContainer>
        </div>
      </ParentSection>

      {/* This is the second inner block which contains the image. */}
      <ParentSection className="parent">
        <DivWrap className="insideBlock">
          <Img src='../src/assets/mypic.jpeg' alt='' />
        </DivWrap>
      </ParentSection>

    </LandingSection></>
  )
}

export default App
