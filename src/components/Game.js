import React from "react";
import Header from "./Header";
import GameTemplate from "./GameTemplate";
import Player from "./Player";
import Computer from "./Computer";
import Counter from "./Counter";
import Score from "./Score";

const Game = () => {
  return (
    <div className="allContainer">
      <Header />
      <GameTemplate
        player={<Player />}
        computer={<Computer />}
        counter={<Counter />}
        score={<Score />}
      />
    </div>
  );
};

export default Game;
