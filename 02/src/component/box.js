import React from "react";

const Box = (props) => {
  let result;

  if (props.name === "COMPUTER" && props.result !== "tie" && props.result !== "") {
    result = props.result === "win" ? "lose" : "win";
  } else {
    result = props.result;
  }

  return (
    <div className={`boxArea ${result}`}>
      <h1>{props.picked}</h1>
      <img src={props.item && props.item.img} alt="" />
      <h2>{props.name}</h2>
      <h2>{result}</h2>
    </div>
  );
};

export default Box;
