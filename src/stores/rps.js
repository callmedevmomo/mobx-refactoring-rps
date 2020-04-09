import { observable, action } from "mobx";

export default class RpsStore {
  @observable playerChoice = "";
  @observable computerChoice = "";
  @observable counter = 10;
  @observable gameStarted = false;

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
    this.gameStarted = true;
    const timeSet = setInterval(() => {
      if (this.counter === 1) {
        clearInterval(timeSet);
      }
      return (this.counter -= 1);
    }, 1000);
  };

  @action userChoice = (user, counter) => {
    const handsLength = this.hands.length - 1;
    const rock = this.hands.map((item) => item.rock)[handsLength];
    const paper = this.hands.map((item) => item.paper)[handsLength];
    const scissors = this.hands.map((item) => item.scissors)[handsLength];
    if (user === rock) {
      this.playerChoice = rock;
    } else if (user === paper) {
      this.playerChoice = paper;
    } else {
      this.playerChoice = scissors;
    }
    let items = [rock, paper, scissors];
    this.computerChoice = items[Math.floor(Math.random() * items.length)];
    if (counter === 0) {
      this.playerStart();
    }
    if (counter !== 0) {
      this.counter = 10;
    }
  };
}