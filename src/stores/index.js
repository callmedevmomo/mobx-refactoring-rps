import RpsStore from "./rps";
import GameStore from "./game";

// Store 구조 다시 짜려면 rps & Game

class RootStore {
  constructor() {
    this.rps = new RpsStore(this);
    this.game = new GameStore(this);
  }
}

export default RootStore;
