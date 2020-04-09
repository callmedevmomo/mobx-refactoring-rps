import { observable, action, computed } from "mobx";

export default class GameStore {
  @observable round = [];
  @observable set = [];

  // comp View 단에 띄울 배열 하나 추가 고민
  @observable allGameFinished = null;

  // 상수화, score array**,

  // [{"winner":userName
  // },{"isdraw" : true
  // }]
  // 기본 state
  //

  // array 추가 안하고 바로 스토어 단에서
  @observable score = [
    // object assign .. {spread ..}
    // rounds:[{}]
    // length & filter 로 이긴횟수 뽑고
    // sets:[{"winner":userName},{"draw" : true}]
    // rounds 자체 length로 판 카운트
    // set length로 카운트

    {
      result: [],
      player: 0,
      computer: 0,
      tie: 0,
      gameRound: 1,

      setCount: 1,
      setPlayer: 0,
      setComputer: 0,
      setTie: 0,
    },
  ];

  constructor(root) {
    this.root = root;
  }

  // @action handleConsole = (user) => {
  //   const { choice, computer, counter, roundCount } = this.root.rps;
  //   console.log(choice, computer, counter, roundCount);
  //   console.log(user);
  // };
  @action handleScore = () => {
    const { choice, computer, counter, roundCount } = this.root.rps;

    const scoreResultObj = {
      round: null,
      player: null,
      computer: null,
      result: null,
    };

    //## const rsp = {
    //   rock: { beats: ["scissors"] },
    //   paper: { beats: ["rock"] },
    //   scissors: { beats: ["paper"] },
    // }
    const winnerObj = {
      winner: null,
    };
    const isDrawObj = {
      isDraw: false,
    };

    //     "property":"vlaue" (value===null) default;
    // [{}]//filter *  구조&

    scoreResultObj.round = roundCount;
    scoreResultObj.player = choice;
    scoreResultObj.computer = computer;

    if (counter === 0) {
      // ## winnerObj.winner="computer";
      // ## this.round.push(winnerObj);
      scoreResultObj.round = roundCount;
      scoreResultObj.player = "time out";
      scoreResultObj.computer = "time out";
      scoreResultObj.result = "lose";
    } else {
      //## 대소 비교
      // else if (this.root.rps.roundCount === 0) {
      //   return "I'm Ready!";
      // } else if (choice === computer) {
      //   return "draw";
      // } else if (rsp[choice].beats.indexOf(computer) !== -1) {
      //   return "win";
      // } else {
      //   return "lose";
      // }
      // ## else if(choice===computer){
      // ## isDrawObj.isDraw=true;
      // ## this.round.push(isDrawObj);
      // }
      // ## else if(rsp[choice].beats.indexOf(computer) !== -1){
      // ## winnerObj.winner="player";
      // ## this.round.push(winnerObj);
      // }else{
      // ## winnerObj.winner="computer";
      // ## this.round.push(winnerObj);}
    }

    scoreResultObj.round = roundCount;
    scoreResultObj.player = choice;
    scoreResultObj.computer = computer;
    scoreResultObj.result = this.roundResult(choice, computer, counter);
    this.score[0].result.push(scoreResultObj);
    // ## this.round.push(w)

    // const result = this.score[0].result[roundCount - 1]["result"];
    // console.log(result);
    // console.log(scoreResultObj.result);
    this.roundDetail(scoreResultObj.result);
    // this.score[0].setRound++;
    // console.log(this.score[0].result[roundCount-1]["result"])
  };

  @action roundDetail(result) {
    //
    if (this.score[0].gameRound < 3) {
      if (result === "win") {
        this.score[0].player++;
      } else if (result === "lose") {
        this.score[0].computer++;
      } else {
        this.score[0].tie++;
      }
      this.score[0].gameRound++;
    } else if (this.score[0].gameRound === 3) {
      this.score[0].gameRound = 1;
      this.setDetail(this.score[0].player, this.score[0].computer);
    }
  }

  // // {
  //   setCount:null,
  //   setWinner:null,
  //   // isDraw ** Winner 나눠서 생각해보기

  //   isDraw:null
  // }

  @action setDetail(player, computer) {
    const { setCount, setPlayer, setComputer, setTie } = this.score[0];
    if (player > computer) {
      this.score[0].setPlayer++;
    } else if (player < computer) {
      this.score[0].setComputer++;
    } else if (player === computer) {
      this.score[0].setTie++;
    }
    this.score[0].setCount++;
    if (setCount === 6) {
      this.setFinished(setPlayer, setComputer, setTie);
    }
    this.score[0].player = 0;
    this.score[0].computer = 0;
    this.score[0].tie = 0;
  }

  @action setFinished = (player, computer, tie) => {
    // console.log(player, computer, tie);
    this.root.rps.gameStarted = false;
    // 상태만 넘기고 view 단에서 처리
    this.allGameFinished = [
      {
        playerWin: player,
        computerWin: computer,
        draw: tie,
      },
    ];
  };

  @action roundResult(
    choice,
    computer,
    counter //  logic rps로 넣기
  ) {
    const rsp = {
      rock: { beats: ["scissors"] },
      paper: { beats: ["rock"] },
      scissors: { beats: ["paper"] },
    };
    if (counter === 0) {
      return "Timeout";
    } else if (this.root.rps.roundCount === 0) {
      return "I'm Ready!";
    } else if (choice === computer) {
      return "draw";
    } else if (rsp[choice].beats.indexOf(computer) !== -1) {
      return "win";
    } else {
      return "lose";
    }
  }

  @computed
  get Scores() {
    return this.roundResult(
      this.root.rps.choice,
      this.root.rps.computer,
      this.root.rps.counter
    );
  }
}
