import React, { Component } from "react";

import ComponetTwo from "./ComponetTwo/ComponetTwo";
import { UseProvider } from "../../../Context/Context";

class ComponentOne extends Component {
  render() {
    return (
      <div>
        <h1>One</h1>
        <UseProvider value={<span style={{ color: 'red' }}>OK!!!!</span>}>
          <ComponetTwo />
        </UseProvider>
      </div>
    );
  }
}

export default ComponentOne;
