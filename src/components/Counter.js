import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const TimerBox = styled.div`
  position: absolute;
  top: 50px;
  left: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  margin-top: 20px;
  color: pink;
  font-size: 45px;
  font-weight: bold;
`;

const Counter = ({ gameTime, gameStrated }) => {
  return gameStrated ? <TimerBox>{gameTime}</TimerBox> : <></>;
};

Counter.propTypes = {
  gameTime: propTypes.number,
  gameStarted: propTypes.bool,
};

export default Counter;
