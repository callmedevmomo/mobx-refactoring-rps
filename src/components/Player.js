import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import propTypes from "prop-types";

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

const Test = styled.div`
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
  count,
}) => {
  // event handling ==> onClick
  // propTypes
  function handleView(event) {
    const {
      target: { value: user },
    } = event;
    userChoice(user, count);
    calculateScore(count);
  }
  return (
    <PlayerBox>
      {gameStarted ? (
        hands.map((hand) => {
          return (
            <Test key={hand}>
              <ButtonBox onClick={handleView} key={hand.rock} value={hand.rock}>
                {hand.rock}
              </ButtonBox>
              <ButtonBox
                onClick={handleView}
                key={hand.paper}
                value={hand.paper}
              >
                {hand.paper}
              </ButtonBox>
              <ButtonBox
                onClick={handleView}
                key={hand.scissors}
                value={hand.scissors}
              >
                {hand.scissors}
              </ButtonBox>
            </Test>
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
  hands: propTypes.array.isRequired,
  calculateScore: propTypes.func.isRequired,
  count: propTypes.number.isRequired,
};

export default inject(({ rps, game }) => ({
  gameStarted: rps.gameStarted,
  playerStart: rps.playerStart,
  userChoice: rps.userChoice,
  hands: rps.hands,
  calculateScore: game.calculateScore,
  count: rps.counter,
}))(observer(Player));
