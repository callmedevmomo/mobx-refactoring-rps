import React from "react";
import styled from "styled-components";

const HeaderTop = styled.header`
  background-color: white;
  height: 50px;
  border-radius: 40px;
  box-shadow: inset -6px -6px 15px rgba(145, 160, 180, 0.45),
    30px 30px 40px rgba(118, 146, 180, 0.18);
  overflow: hidden;
  padding: 20px;
`;
const HeaderText = styled.div`
  font-size: 35px;
  display: flex;
  justify-content: center;
`;

const Header = () => {
  return (
    <HeaderTop>
      <HeaderText>Best 2 out of 3 || Rock Paper Scissors</HeaderText>
    </HeaderTop>
  );
};

export default Header;
