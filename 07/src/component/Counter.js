import React from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";

const Counter = () => {
  const num = useSelector((state) => state.count);
  const dispatch = useDispatch();

  const increase = () => {
    dispatch({ type: "INCREMENT" });
  };

  const decrease = () => {
    dispatch({ type: "DECREMENT" });
  };

  const login = () => {
    dispatch({ type: "login", payload: { id: "JINBOK", pw: "12345" } });
  };

  return (
    <div>
      <div>
        <h1>{num}</h1>
        <button onClick={decrease}>-1</button>
        <button onClick={increase}>+1</button>
        <button onClick={login}>LOGIN</button>
      </div>
    </div>
  );
};

export default Counter;
