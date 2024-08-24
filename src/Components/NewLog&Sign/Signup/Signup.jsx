import React, { Component } from "react";
import "./Signup.css";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.fNameRef = React.createRef();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      email: "",
      password: "",
      registrationTime: "",
      isSubmitted: false,
    };
  }

  componentDidMount() {
    this.fNameRef.current.focus();
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    const currentTime = new Date().toLocaleString();
    this.setState({
      isSubmitted: true,
      registrationTime: currentTime,
    });
  };

  render() {
    return (
      <div className="body0">
        {this.state.isSubmitted ? (
          <>
            <div className="body2">
              <h2>User Information</h2>
              <p>
                <b> Welcome </b>
                {this.state.firstName} {this.state.lastName}
              </p>
              <p>
                <b>Your email is </b>
                <br />
                {this.state.email}
              </p>
              <p>
                <b>You are signed up to the website at </b>
                <br />
                {this.state.registrationTime}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="body1">
              <h2>Sign Up</h2>
              <form>
                <div>
                  <label>First Name</label>
                  <br />

                  <input
                    type="text"
                    name="firstName"
                    ref={this.fNameRef}
                    value={this.state.firstName}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />

                  <label>Last Name</label>
                  <br />

                  <input
                    type="text"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />

                  <label>Age</label>
                  <br />

                  <input
                    type="number"
                    name="age"
                    value={this.state.age}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />

                  <label>Email</label>
                  <br />

                  <input
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />

                  <label>Password</label>
                  <br />

                  <input
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <br />
                  <br />

                  <button
                    className="bu1"
                    type="button"
                    onClick={this.handleClick}
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default SignUp;
