import React from "react";
import styled from "styled-components";
import propTypes from "prop-types";

const AllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 60px;
  margin-top: 10px;
`;

const RestartButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 60px;
  text-decoration: none;
`;

const GameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 60vh;
  margin-top: 20px;
`;

const PlayerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 450px;
  margin-top: 25px;
  margin-left: 25px;
  background-color: #54a0ff;
`;

const ComputerBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 450px;
  margin-top: 25px;
  margin-right: 25px;
  background-color: #feca57;
`;
const ScoreBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 800px;
  height: 450px;
  margin-top: 25px;
`;

const GameTemplate = ({ player, computer, score }) => {
  return (
    <AllContainer>
      <ButtonBox>
        <RestartButton href="/">Restart</RestartButton>
      </ButtonBox>
      <GameContainer>
        <PlayerBox>{player}</PlayerBox>
        <ScoreBox>{score}</ScoreBox>
        <ComputerBox>{computer}</ComputerBox>
      </GameContainer>
    </AllContainer>
  );
};

GameTemplate.propTypes = {
  player: propTypes.element.isRequired,
  computer: propTypes.element.isRequired,
  score: propTypes.element.isRequired,
};
export default GameTemplate;
