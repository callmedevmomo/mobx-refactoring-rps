import { observable, action } from "mobx";

export default class RpsStore {
  @observable playerChoice = "";
  @observable computerChoice = "";
  @observable gameTime = 10;
  @observable gameStarted = false;

  hands = { rock: "rock", scissors: "scissors", paper: "paper" };

  constructor(root) {
    this.root = root;
  }

  @action playerStart = () => {
    this.gameTime = 10;
    this.gameStarted = true;
    const timeSet = setInterval(() => {
      if (this.gameTime === 1) {
        clearInterval(timeSet);
      }
      return (this.gameTime -= 1);
    }, 1000);
  };

  @action userChoice = (user, counter) => {
    const rock = this.hands.rock;
    const paper = this.hands.paper;
    const scissors = this.hands.scissors;
    if (user === rock) {
      this.playerChoice = rock;
    } else if (user === paper) {
      this.playerChoice = paper;
    } else {
      this.playerChoice = scissors;
    }
    let items = Object.values(this.hands);
    this.computerChoice = items[Math.floor(Math.random() * items.length)];
    if (counter === 0) {
      this.playerStart();
    }
    if (counter !== 0) {
      this.gameTime = 10;
    }
  };
}
