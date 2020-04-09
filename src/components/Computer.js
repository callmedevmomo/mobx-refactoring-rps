import React from "react";
import { inject, observer } from "mobx-react";

const Computer = ({ computerChoice }) => {
  return (
    <div>
      <div>{computerChoice}</div>
    </div>
  );
};

export default inject(({ rps }) => ({
  computerChoice: rps.computer,
}))(observer(Computer));
