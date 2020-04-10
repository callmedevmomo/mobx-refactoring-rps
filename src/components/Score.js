import React from "react";
import styled from "styled-components";
import { inject, observer } from "mobx-react";
import propTypes from "prop-types";

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
        gameScore.map((item, index) => {
          return (
            <FlexBox key={index}>
              <FinishedBox>{item.gameScore}</FinishedBox>
            </FlexBox>
          );
        })
      ) : (
        <FlexScoreBox>
          {currentRound.map((item, index) => {
            return (
              <FlexBox key={index}>
                <RoundBox>{item.playerChoice}</RoundBox>
                <RoundBox>{item.winner ? item.winner : "draw"}</RoundBox>
                <RoundBox>{item.computerChoice}</RoundBox>
              </FlexBox>
            );
          })}
        </FlexScoreBox>
      )}
    </div>
  );
};

Score.propTypes = {
  allGameFinished: propTypes.bool.isRequired,
  currentRound: propTypes.array.isRequired,
  gameScore: propTypes.array.isRequired,
};
export default inject(({ game }) => ({
  currentRound: game.currentRound,
  allGameFinished: game.allGameFinished,
  gameScore: game.gameScore,
}))(observer(Score));
