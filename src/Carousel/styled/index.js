import styled from 'styled-components'

const Container = styled.div`
  width: ${props => (props.width)}px;
  height: ${props => (props.width/2.5)}px;
  position: relative;
  margin: 100px auto 50px auto;
  display: flex;
  overflow: hidden;
`

const CarouselContainer  = styled.div`
  display: flex;
  transition: 0.2s;
  transform: translateX(-${props => (props.position)}px);
`

const ButtonGroup = styled.div`
  text-align: center;
`

const  CustomSelectContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  text-align: center;

  label {
    font-weight: bold;
  }
`

const CustomSelect = styled.select`
  width: 200px;
  height: 30px;
  margin-left: 10px;
`;


export { Container, CarouselContainer, ButtonGroup, CustomSelectContainer,CustomSelect };