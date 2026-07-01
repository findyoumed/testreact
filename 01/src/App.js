import { useState } from "react";
import "./App.css";
import Box from "./component/box";

function App() {
  let counter = 0;
  const [counter2, setCounter2] = useState(0);
  const increase = () => {
    counter = counter + 1;
    setCounter2(counter2 + 1);
    console.log("counter is",counter,"counter2 state is",counter2);
    // state는 비동기로 작동한다! 기억할 것!
  };
  return (
    <div>
      <Box num="1" name="A" />
      <Box num="2" name="B" />
      <Box num="3" name="C" />

      <div>{counter}</div>
      <div>state:{counter2}</div>
      <button onClick={increase}>Click!</button>
    </div>
  );
}

export default App;
