import React, { Component } from "react";
import "./App.css";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    picked: "rock",
    img: "/img/rock.png",
  },
  scissor: {
    picked: "scissor",
    img: "/img/scissor.png",
  },
  paper: {
    picked: "paper",
    img: "/img/paper.png",
  }
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelect: null,
      computerSelect: null,
      result: "",
    };
  }

  play = (pick) => {
    let userChoice = choice[pick];
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: userChoice,
      computerSelect: computerChoice,
      result: this.judgement(userChoice, computerChoice),
    });
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomNum = Math.floor(Math.random() * itemArray.length);
    let computerChoice = itemArray[randomNum];
    return choice[computerChoice];
  };

  judgement = (user, computer) => {
    if (user.picked === computer.picked) {
      return "tie";
    } else if (user.picked === "rock") {
      return computer.picked === "scissor" ? "win" : "lose";
    } else if (user.picked === "scissor") {
      return computer.picked === "paper" ? "win" : "lose";
    } else if (user.picked === "paper") {
      return computer.picked === "rock" ? "win" : "lose";
    }
  };

  render() {
    return (
      <div>
        <div className="flexBox">
          <BoxClass name="YOU" result={this.state.result} item={this.state.userSelect} />
          <BoxClass name="COMPUTER" result={this.state.result} item={this.state.computerSelect} />
        </div>
        <div className="flexBox">
          <button onClick={() => this.play("rock")}>ROCK</button>
          <button onClick={() => this.play("scissor")}>SCISSOR</button>
          <button onClick={() => this.play("paper")}>PAPER</button>
        </div>
      </div>
    );
  }
}
