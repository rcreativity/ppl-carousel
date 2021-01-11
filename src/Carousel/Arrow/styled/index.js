import styled from 'styled-components'

const ArrowContainer = styled.div`
  background: ${props => (props.disabled === true ? '#dddddd' : '#03707f')};
  padding: 15px 5px;
  display: inline-block;
  cursor: pointer;
  transform: ${props => (props.name === "Left" ? 'rotate(180deg)' : 'rotate(0deg)')};
  position: absolute;
  top: 35%;
  ${props => (props.name === "Left" ? 'left' : 'right')}: 16%;
  pointer-events: ${props => (props.disabled === true && 'none')};
`

export default ArrowContainer