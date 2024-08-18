import React, { Component } from "react";

class ClassProps extends Component {
  render() {
    return (
      <div>
        <h3>
          <h1>Subjects</h1>
          {this.props.subject1}
          <br />
          {this.props.subject2}
        </h3>
        {this.props.children}
      </div>
    );
  }
}

export default ClassProps;
