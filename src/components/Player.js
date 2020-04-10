import React from "react";
import styled from "styled-components";
import { inject } from "mobx-react";
import propTypes from "prop-types";
import Counter from "./Counter";

const PlayerBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonBox = styled.button`
  height: 60px;
  margin-top: 20px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PlayerDisplayer = ({
  gameStarted,
  playerStart,
  userChoice,
  hands,
  calculateScore,
  gameTime,
}) => {
  function clickHandler(hand) {
    userChoice(hand, gameTime);
    calculateScore(gameTime);
  }
  return (
    <PlayerBox>
      <Counter gameTime={gameTime} gameStarted={gameStarted} />
      {gameStarted ? (
        Object.values(hands).map((hand, index) => {
          return (
            <ButtonWrapper key={index}>
              <ButtonBox onClick={() => clickHandler(hand)}>{hand}</ButtonBox>
            </ButtonWrapper>
          );
        })
      ) : (
        <ButtonBox onClick={playerStart}>Start</ButtonBox>
      )}
    </PlayerBox>
  );
};
const Player = inject((stores) => ({
  gameStarted: stores.rps.gameStarted,
  playerStart: stores.rps.playerStart,
  userChoice: stores.rps.userChoice,
  hands: stores.rps.hands,
  calculateScore: stores.game.calculateScore,
  gameTime: stores.rps.gameTime,
}))(PlayerDisplayer);

Player.propTypes = {
  gameStarted: propTypes.bool,
  playerStart: propTypes.func,
  userChoice: propTypes.func,
  hands: propTypes.object,
  calculateScore: propTypes.func,
  gameTime: propTypes.number,
};

export default Player;
