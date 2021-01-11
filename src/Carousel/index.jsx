import React, { useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import Arrow from "./Arrow";
import {
  Container,
  CarouselContainer,
  ButtonGroup,
  CustomSelectContainer,
  CustomSelect,
} from "./styled";

function Carousel(props) {
  const { width, data } = props;

  const [position, setPosition] = useState(0);
  const [count, setCount] = useState(0);
  const [selectedValue, setSelectedValue] = useState("");

  const getSingleCarouselawidth = width / 2 / 2;
  const dataLength = data.length;

  const uniques = Object.values(
    data.reduce((a, c) => {
      a[c.category + "|" + c.category] = c;
      return a;
    }, {})
  );

  const rightClick = () => {
    const counter =
      getSingleCarouselawidth * dataLength - getSingleCarouselawidth * 4;
    if (position <= counter) {
      setPosition(position + 250);
      setCount(count + 1);
    }
  };

  const leftClick = () => {
    if (position > 0) {
      setPosition(position - 250);
      setCount(count - 1);
    }
  };

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    setPosition(0);
  };

  let getFilteredData = data;
  if (selectedValue) {
    getFilteredData = data.filter((value) => {
      return value.category === selectedValue;
    });
    console.log(getFilteredData);
  }

  return (
    <>
      <Container width={width}>
        <CarouselContainer position={position}>
          {getFilteredData.map((value, index) => {
            return <Item key={index} count={count} item={value} />;
          })}
        </CarouselContainer>
      </Container>
      <ButtonGroup>
        <Arrow disabled={position === 0} name="Left" ClickFunc={leftClick} />
        <Arrow
          disabled={
            position ===
            getSingleCarouselawidth * getFilteredData.length -
              getSingleCarouselawidth * 3
          }
          name="Right"
          ClickFunc={rightClick}
        />
      </ButtonGroup>
      <CustomSelectContainer>
        <label htmlFor="category">Choose a category:</label>
        <CustomSelect value={selectedValue} onChange={handleChange}>
          <option value="">Select reason</option>
          {uniques.map((value, index) => {
            return (
              <option key={value?.id} value={value?.category}>
                {value?.category}
              </option>
            );
          })}
        </CustomSelect>
      </CustomSelectContainer>
    </>
  );
}

Carousel.propTypes = {
  width: PropTypes.number,
};

Carousel.defaultProps = {
  width: 1000,
};

export default Carousel;
