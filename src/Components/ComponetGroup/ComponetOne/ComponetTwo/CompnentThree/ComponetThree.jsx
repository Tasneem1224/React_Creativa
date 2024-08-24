import React, { Component } from "react";
import ComponetFour from "./CompnentFour/ComponetFour";
import { UseConsumer } from "../../../../../Context/Context";

class ComponetThree extends Component {
  render() {
    return (
      <div>
        <UseConsumer>
          {(value) => {
            return <h1>Three {value}</h1>;
          }}
        </UseConsumer>

        <ComponetFour />
      </div>
    );
  }
}

export default ComponetThree;
