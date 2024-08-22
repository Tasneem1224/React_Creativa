import React, { Component } from "react";
import "./AddRemove.css";

class AddRemove extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.add = this.add.bind(this);
    this.remove = this.remove.bind(this);
  }

  add() {
    this.setState({ count: this.state.count + 1 });
  }

  remove() {
    this.setState({ count: this.state.count > 1 ? this.state.count - 1 : 1 });
  }

  render() {
    return (
      <div className="body">
        <div className="add">
          <ul>
            <li>
              <button className="bu" onClick={this.remove}> - </button>
            </li>
            <li>
              <label>
                {this.state.count} {}
              </label>
            </li>
            <li>
              <button className="bu" onClick={this.add}> + </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default AddRemove;
