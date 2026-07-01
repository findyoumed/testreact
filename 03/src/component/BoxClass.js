import React, { Component } from "react";

export default class BoxClass extends Component {
  constructor() {
    super();
    this.result = "";
  }

  getResult = () => {
    if (this.props.name === "COMPUTER" && this.props.result !== "tie" && this.props.result !== "") {
      this.result = this.props.result === "win" ? "lose" : "win";
    } else {
      this.result = this.props.result;
    }
  };

  render() {
    this.getResult();
    return (
      <div className={`boxArea ${this.result}`}>
        <h1>{this.props.picked}</h1>
        <img src={this.props.item && this.props.item.img} alt="" />
        <h2>{this.props.name}</h2>
        <h2>{this.result}</h2>
      </div>
    );
  }
}
