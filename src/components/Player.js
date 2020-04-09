import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const PlayerBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ButtonBox = styled.button`
  height: 60px;
`;

const Test = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Player = ({
  gameStarted,
  playerStart,
  userChoice,
  playerChoice,
  hands,
  handleScore,
}) => {
  function handleView(event) {
    const {
      target: { value: user },
    } = event;
    handleScore();
    return userChoice(user);
  }
  return (
    <PlayerBox>
      {gameStarted ? (
        <>
          {hands.map((hand) => {
            return (
              <Test key={hand}>
                <ButtonBox
                  onClick={handleView}
                  key={hand.rock}
                  value={hand.rock}
                >
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
          })}
          <div>{playerChoice}</div>
        </>
      ) : (
        <ButtonBox onClick={playerStart}>Start</ButtonBox>
      )}
    </PlayerBox>
  );
};

export default inject(({ rps, game }) => ({
  gameStarted: rps.gameStarted,
  playerStart: rps.playerStart,
  userChoice: rps.userChoice,
  playerChoice: rps.choice,
  hands: rps.hands,
  handleScore: game.handleScore,
}))(observer(Player));
