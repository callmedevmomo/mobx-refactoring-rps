import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";

const FinishedBox = styled.div``;

const FlexBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const FlexScoreBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const RoundBox = styled.div`
  width: 100px;
  margin-left: 30px;
`;

const Score = ({ allGameFinished, currentRound, gameScore }) => {
  return (
    <div>
      {allGameFinished ? (
        <>
          {gameScore.map((item) => {
            return <FinishedBox key={item}>{item.gameScore}</FinishedBox>;
          })}
        </>
      ) : (
        <FlexScoreBox>
          {currentRound.map((item) => {
            return (
              <FlexBox key={item}>
                <RoundBox key={item.playerChoice}>{item.playerChoice}</RoundBox>
                <RoundBox key={item.winner || item.isDraw}>
                  {item.winner ? item.winner : "draw"}
                </RoundBox>
                <RoundBox key={item.computerChoice}>
                  {item.computerChoice}
                </RoundBox>
              </FlexBox>
            );
          })}
        </FlexScoreBox>
      )}
    </div>
  );
};

export default inject(({ game }) => ({
  currentRound: game.currentRound,
  allGameFinished: game.allGameFinished,
  gameScore: game.gameScore,
}))(observer(Score));
