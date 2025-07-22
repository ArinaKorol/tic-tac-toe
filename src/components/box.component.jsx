import styled from '@emotion/styled'

const PinkButton = styled.button`
  background-color: pink;
    float: right;
  &:hover{
  border-color: white
  }
`

const WhiteButton = styled.button`
  background-color: white;
  float: right;
  &:hover{
  border-color: pink
  }
`
export function Box({value, onBoxClick, color}) {
  return (
    <> {color==="white" ? <WhiteButton onClick={ onBoxClick }>{value}</WhiteButton> : <PinkButton onClick={ onBoxClick }>{value}</PinkButton>}
    </>
  )
}