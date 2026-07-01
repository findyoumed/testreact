import React from 'react'

const Box = (props) => {
  let resultText = "";

  if(props.result) {
    resultText = props.result === "win" ? "WINNER" : props.result === "lose" ? "LOSER" : "DRAW"
  }

  return (
    <div className={`box ${props.result || 'init'}`} key={Date.now()}>
        <h1>{props.title}</h1>
        <img className="item-img" 
            src={(props.item && props.item.img) || '/images/rock-paper-scissors.png'} 
            alt={(props.item && props.item.name) || 'rock-paper-scissors'} />
        <h2>{resultText || 'rock-paper-scissors'}</h2>
    </div>
  )
}

export default Box
