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

const GameTemplate = ({ player, computer, counter, score }) => {
  return (
    <AllContainer>
      <TimerBox>{counter}</TimerBox>
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
  player: propTypes.object.isRequired,
  computer: propTypes.object.isRequired,
  counter: propTypes.object.isRequired,
  score: propTypes.object.isRequired,
};
export default GameTemplate;
