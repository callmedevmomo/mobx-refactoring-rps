import { observable, action } from "mobx";

export default class GameStore {
  // 모든 게임 결과
  @observable rounds = [];
  // set 결과
  @observable sets = [];

  // comp View 단에 띄울 1세트당 라운드 진행상황 &&  set 수 Count
  @observable currentRound = [];

  // 모든 세트 후 결과 값
  @observable gameScore = [];

  @observable allGameFinished = false;

  constructor(root) {
    this.root = root;
  }

  @action calculateScore = (counter) => {
    // 모든 게임 결과 round에 push
    const { playerChoice, computerChoice, hands } = this.root.rps;
    const rsp = {
      rock: { beats: hands.scissors },
      paper: { beats: hands.rock },
      scissors: { beats: hands.paper },
    };

    const winnerObj = {
      winner: null,
      playerChoice,
      computerChoice,
    };
    const isDrawObj = {
      isDraw: false,
      playerChoice,
      computerChoice,
      counter,
    };
    const currentRoundCount = this.currentRound.length;
    if (counter === 0) {
      winnerObj.winner = "computer";
      this.rounds.push(winnerObj);
      this.currentRound.push(winnerObj);
    } else if (playerChoice === computerChoice) {
      isDrawObj.isDraw = true;
      this.rounds.push(isDrawObj);
      this.currentRound.push(isDrawObj);
    } else if (rsp[playerChoice].beats.indexOf(computerChoice) !== -1) {
      winnerObj.winner = "player";
      this.rounds.push(winnerObj);
      this.currentRound.push(winnerObj);
    } else {
      winnerObj.winner = "computer";
      this.rounds.push(winnerObj);
      this.currentRound.push(winnerObj);
    }

    // currentRound를 통한 set Count
    const currentWinCount = this.currentRound.filter(
      (item) => item.winner === "player"
    ).length;
    const currentLoseCount = this.currentRound.filter(
      (item) => item.winner === "computer"
    ).length;

    const setObj = {
      setWinner: null,
      setisDraw: false,
    };

    // set가 올라가면 currentRound 리셋
    if (currentRoundCount === 3) {
      if (currentWinCount > currentLoseCount) {
        setObj.setWinner = "player";
        this.sets.push(setObj);
      } else if (currentWinCount < currentLoseCount) {
        setObj.setWinner = "computer";
        this.sets.push(setObj);
      } else {
        setObj.setisDraw = true;
        this.sets.push(setObj);
      }
      this.currentRound = [];
    }

    const setCount = this.sets.length;
    const setPlayerWin = this.sets.filter((item) => item.setWinner === "player")
      .length;
    const setComputerWin = this.sets.filter(
      (item) => item.setWinner === "computer"
    ).length;
    const gameFinishedObj = {
      gameScore: null,
    };

    // 최종 세트 이후 결과값
    if (setCount === 5) {
      if (setPlayerWin > setComputerWin) {
        gameFinishedObj.gameScore = "You Win";
        this.gameScore.push(gameFinishedObj);
      } else if (setPlayerWin < setComputerWin) {
        gameFinishedObj.gameScore = "Lose";
        this.gameScore.push(gameFinishedObj);
      } else {
        gameFinishedObj.gameScore = "Draw the Game";
        this.gameScore.push(gameFinishedObj);
      }
      this.allGameFinished = true;
    }
  };
}
