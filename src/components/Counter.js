import React from "react";
import { observer, inject } from "mobx-react";

const Counter = ({ count, gameStrated }) => {
  return <>{gameStrated ? <div>{count}</div> : ""}</>;
};

export default inject(({ rps }) => ({
  count: rps.counter,
  gameStrated: rps.gameStarted,
}))(observer(Counter));
