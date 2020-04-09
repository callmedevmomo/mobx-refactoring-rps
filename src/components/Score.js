import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const FinishedBox = styled.div``;
const FinishInfo = styled.div``;

const ScoreBox = styled.div``;

const Score = ({ allGameFinished, userChoice, computerChoice, getScore }) => {
  return (
    <div>
      {allGameFinished ? (
        <>
          {allGameFinished.map((item) => {
            return (
              <FinishedBox key={item}>
                <FinishInfo key={item.playerWin}>
                  Player Win : {item.playerWin}
                </FinishInfo>
                <FinishInfo key={item.computerWin}>
                  Computer Win : {item.computerWin}
                </FinishInfo>
                <FinishInfo key={item.draw}>Draw Game : {item.draw}</FinishInfo>
              </FinishedBox>
            );
          })}
        </>
      ) : (
        <ScoreBox>
          <div>
            <div>{userChoice}</div>
            <div>{computerChoice}</div>
            <div>{getScore}</div>
          </div>
        </ScoreBox>
      )}
    </div>
  );
};

export default inject(({ rps, game }) => ({
  userChoice: rps.choice,
  computerChoice: rps.computer,
  getScore: game.Scores,
  allGameFinished: game.allGameFinished,
}))(observer(Score));
