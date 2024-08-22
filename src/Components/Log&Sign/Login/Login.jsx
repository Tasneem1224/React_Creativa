import React, { Component } from "react";
import "./Login.css";

class LogIn extends Component {
  render() {
    return (
      <div className="body2">
        <h2>Log In</h2>
        <form>
          <div>
            <label>Email</label>
            <br />
            <input type="email"></input>
            <br />
            <label>Password</label>
            <br />
            <input type="password"></input>
            <br />
            <button className="bu2">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LogIn;
