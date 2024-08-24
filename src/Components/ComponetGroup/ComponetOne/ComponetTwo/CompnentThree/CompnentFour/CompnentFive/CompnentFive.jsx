import React, { Component } from "react";
import { UseConsumer } from "../../../../../../../Context/Context";

class ComponetFive extends Component {
  render() {
    return (
      <div>
        <UseConsumer>
          {(value) => {
            return <h1>Five {value}</h1>;
          }}
        </UseConsumer>
      </div>
    );
  }
}

export default ComponetFive;
