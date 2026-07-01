import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const SuperBox = () => {
  let num = useSelector((state) => state.count+1);
  return (
    <div>
      <h2>this is +1 SuperBox</h2>
      <h2>{num}</h2>
    </div>
  );
};

export default SuperBox;
