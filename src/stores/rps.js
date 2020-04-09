import { observable, action } from "mobx";

// storage 구조

export default class RpsStore {
  // choice 이름 바꾸기
  @observable choice = "";
  @observable computer = "";
  @observable counter = 10;
  @observable roundCount = 0;
  @observable gameStarted = false;

  // object로 상수화

  // hands = ["rock", "paper", "scissors"];

  hands = [
    {
      rock: "rock",
      paper: "paper",
      scissors: "scissors",
    },
  ];

  constructor(root) {
    this.root = root;
  }

  @action playerStart = () => {
    this.counter = 10;
    this.root.game.allGameFinished = false;
    this.gameStarted = true;
    const timeSet = setInterval(() => {
      if (this.counter === 1) {
        clearInterval(timeSet);
      }
      return (this.counter -= 1);
    }, 1000);
  };

  @action userChoice = (user) => {
    const handsLength = this.hands.length - 1;
    const rock = this.hands.map((item) => item.rock)[handsLength];
    const paper = this.hands.map((item) => item.paper)[handsLength];
    const scissors = this.hands.map((item) => item.scissors)[handsLength];
    //   Score Logic ==> game.js (store) 단으로 옮 (계산로직)
    this.roundCount += 1;
    if (user === rock) {
      this.choice = rock;
    } else if (user === paper) {
      this.choice = paper;
    } else {
      this.choice = scissors;
    }
    let items = [rock, paper, scissors];
    this.computer = items[Math.floor(Math.random() * items.length)];
    // score에서 가져다써서 결국 문제 ==> observable만 가져다 쓰면서 나머지 자동업데이트
    if (this.counter === 0) {
      this.playerStart();
    }
    if (this.counter !== 0) {
      this.counter = 10;
    }
  };
}
