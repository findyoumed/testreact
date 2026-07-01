import "./App.css";
import Box from "./component/box";
import { useState } from "react";

function App() {
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
    },
  };

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelecet] = useState(null);
  const [result, setResult] = useState("");

  const play = (pick) => {
    let userChoice = choice[pick];
    setUserSelect(userChoice);
    let computerChoice = randomChoice();
    setComputerSelecet(computerChoice);
    setResult(judgement(userChoice, computerChoice));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomNum = Math.floor(Math.random() * itemArray.length);
    let computerChoice = itemArray[randomNum];
    return choice[computerChoice];
  };

  const judgement = (user, computer) => {
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

  return (
    <div>
      <div className="flexBox">
        <Box name="YOU" result={result} item={userSelect} />
        <Box name="COMPUTER" result={result} item={computerSelect} />
      </div>
      <div className="flexBox">
        <button onClick={() => play("rock")}>ROCK</button>
        <button onClick={() => play("scissor")}>SCISSOR</button>
        <button onClick={() => play("paper")}>PAPER</button>
      </div>
    </div>
  );
}

export default App;
