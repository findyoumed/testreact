import { useState } from 'react';
import './App.css';
import Box from './component/Box';

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3, 4 결과를 가지고 승패를 따진다
// 6. 승패 결과에 따라 테두리 색 변경 (이기면-초록, 지면-빨강, 비기면-검정)
const choice = {
  rock:{
    name: "Rock",
    img: "/images/rock.png"
  },
  scissors:{
    name: "Scissors",
    img: "/images/scissors.png"
  },
  paper:{
    name: "Paper",
    img: "/images/paper.png"
  }
};

function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("");
  const [computerResult, setComputerResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    let result = judgement(choice[userChoice], computerChoice);
    setResult(result);
    setComputerResult(result === "win" ? "lose" : (result === "lose" ? "win" : "tie"));
  };

  const judgement = (user, computer) => {

    if(user.name === computer.name) {
      return "tie"
    } else if(user.name === "Rock") {
      return computer.name === "Scissors" ? "win" : "lose";
    } else if(user.name === "Scissors") {
      return computer.name === "Paper" ? "win" : "lose";
    } else if(user.name === "Paper") {
      return computer.name === "Rock" ? "win" : "lose";
    }

  }

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키 값만 뽑아서 배열로 만들어주는 함수
    let randomItem = Math.floor(Math.random() * itemArray.length);

    return choice[itemArray[randomItem]];
  }

  const resetGame = () => {
    setUserSelect(null);
    setComputerSelect(null);
    setResult("");
    setComputerResult("");
  }

  return (
    <div>
      <div className="game-title">
          <h1 onClick={resetGame}>Rock Paper Scissors✌🏻</h1>
      </div>
      <div className="game-container">
        <div className="main game-boxes">
          <Box title="You" item={userSelect} result={result}/>
          <Box title="Computer" item={computerSelect} result={computerResult}/>  
        </div>
        <div className="main game-buttons">
          <button onClick={() => play("rock")}>Rock</button>
          <button onClick={() => play("paper")}>Paper</button>
          <button onClick={() => play("scissors")}>Scissors</button>
        </div>
      </div>
    </div>
  );
}

export default App;
