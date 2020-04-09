import RpsStore from "./rps";
import GameStore from "./game";

class RootStore {
  constructor() {
    this.rps = new RpsStore(this);
    this.game = new GameStore(this);
  }
}

export default RootStore;
