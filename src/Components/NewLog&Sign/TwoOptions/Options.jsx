import React, { Component } from "react";
import "./Options.css";

import SignUp from "../Signup/Signup";
import Login from "../Login/Login";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signUp: false,
      login: false,
    };

    this.signUpClick = this.signUpClick.bind(this);
    this.loginClick = this.loginClick.bind(this);
  }

  signUpClick() {
    this.setState({ signUp: true, login: false });
  }

  loginClick() {
    this.setState({ signUp: false, login: true });
  }

  render() {
    return (
      <div className="body0">
        {this.state.signUp ? (
          <SignUp />
        ) : this.state.login ? (
          <Login />
        ) : (
          <div className="op">
            <h1>What do you want to do?</h1>
            <button className="but" onClick={this.signUpClick}>
              Sign Up
            </button>
            <button className="but" onClick={this.loginClick}>
              Log In
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Options;
