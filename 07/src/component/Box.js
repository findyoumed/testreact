import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import SuperBox from "./SuperBox";

const Box = () => {
  let num = useSelector((state) => state.count);
  let now = useSelector((state) => state.login);
  let id = useSelector((state) => state.id);
  let pw = useSelector((state) => state.pw);
  
  return (
    <div>
      <h2>This is Box</h2>
      <h2>{num}</h2>
      <SuperBox />
      <h1>{now}</h1>
      <p>{id}</p>
      <p>{pw}</p>
    </div>
  );
};

export default Box;
