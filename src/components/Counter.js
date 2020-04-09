import React from "react";
import { observer, inject } from "mobx-react";
import propTypes from "prop-types";

const Counter = ({ count, gameStrated }) => {
  return gameStrated ? <div>{count}</div> : <></>;
};

Counter.propTypes = {
  count: propTypes.number.isRequired,
  gameStarted: propTypes.bool,
};
export default inject(({ rps }) => ({
  count: rps.counter,
  gameStrated: rps.gameStarted,
}))(observer(Counter));
