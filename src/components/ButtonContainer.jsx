import styled from 'styled-components'

const ButtonContainerWrapper = styled.div`
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

export const ButtonContainer = () => {
    return (
       <ButtonContainerWrapper>
            <Button name = 'resumeButton' > My Resume </Button>
            <Button name = 'hireMeButton' > Hire Me </Button>
       </ButtonContainerWrapper>
    )
}