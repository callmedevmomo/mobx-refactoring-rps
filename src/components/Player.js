import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
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

const Player = ({
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
      <Counter gameTime={gameTime} gameStrated={gameStarted} />
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

Player.propTypes = {
  gameStarted: propTypes.bool.isRequired,
  playerStart: propTypes.func.isRequired,
  userChoice: propTypes.func.isRequired,
  hands: propTypes.object.isRequired,
  calculateScore: propTypes.func.isRequired,
  gameTime: propTypes.number.isRequired,
};

export default inject(({ rps, game }) => ({
  gameStarted: rps.gameStarted,
  playerStart: rps.playerStart,
  userChoice: rps.userChoice,
  hands: rps.hands,
  calculateScore: game.calculateScore,
  gameTime: rps.gameTime,
}))(observer(Player));
