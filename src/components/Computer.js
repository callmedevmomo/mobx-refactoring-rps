import React from "react";
import { inject, observer } from "mobx-react";
import propTypes from "prop-types";

const Computer = ({ computerChoice }) => {
  return (
    <div>
      <div>{computerChoice}</div>
    </div>
  );
};

Computer.propTypes = {
  computerChoice: propTypes.string,
};
export default inject(({ rps }) => ({
  computerChoice: rps.computerChoice,
}))(observer(Computer));
