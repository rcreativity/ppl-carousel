import styled from 'styled-components'

const SingleItem = styled.div`
  position: relative;
  width: 250px;
  box-sizing: border-box;

  &:nth-child(${props => (props.count)+ 2}){
    width: 500px;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      content: "";
      background-image: url(${props => (props.url)});
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: blur(40px);
    }

    .image{
      background-size: contain;
      filter: blur(0px);
      border-left: 5px solid #ffffff;
      border-right: 5px solid #ffffff;
      box-sizing: border-box;
    }

    .description{
      background-color: #2b2b2bb0;
      color: #ececec;
      border-left: 5px solid #ffffff;
      border-right: 5px solid #ffffff;
      border-top: 2px solid #ffffff;
      box-sizing: border-box;
    }
  }
`

const ItemImage = styled.div`
  width: 100%;
  background-image: url(${props => (props.url)});
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

const ItemDescription = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  text-align: center;
  background-color: #ffffffb0;
`

const Info = styled.p`
  padding: 0;
  margin: 5px auto;
  font-weight: bold;
`

export { SingleItem, ItemImage, ItemDescription, Info }