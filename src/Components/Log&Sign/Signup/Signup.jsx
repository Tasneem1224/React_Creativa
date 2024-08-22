import React, { Component } from "react";
import "./Signup.css";

class SignUp extends Component {
  render() {
    return (
      <div className="body1">
        <h2>Sign Up</h2>
        <form>
          <div>
            <label>First Name</label>
            <br />
            <input type="text"></input>
            <br />
            <label>Last Name</label>
            <br />
            <input type="text"></input>
            <br />
            <label>Age</label>
            <br />
            <input type="number"></input>
            <br />
            <label>Email</label>
            <br />
            <input type="email"></input>
            <br />
            <label>Password</label>
            <br />
            <input type="password"></input>
            <br />
            <button className="bu1">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUp;
