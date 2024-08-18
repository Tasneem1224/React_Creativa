import React, { Component } from "react";

class StateEX extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      subscription: "Guest",
    };
  }

  changeResult() {
    this.setState(
      {
        isLoggedIn: true,
        subscription: "You now have a subscription",
      },
      () => {
        console.log(this.state.subscription);
      }
    );
  }

  render() {
    return (
      <div>
        <h1>{this.state.subscription} </h1>
        <button onClick={() => this.changeResult()}>Click</button>
      </div>
    );
  }
}

export default StateEX;
