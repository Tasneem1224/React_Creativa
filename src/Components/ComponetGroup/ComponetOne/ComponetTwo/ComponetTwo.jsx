import React, { Component } from "react";
import ComponetThree from "./CompnentThree/ComponetThree";

class ComponetTwo extends Component {
  render() {
    return (
      <div>
        <h1>Two</h1>
        <ComponetThree />
      </div>
    );
  }
}

export default ComponetTwo;
