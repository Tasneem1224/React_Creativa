import React, { Component } from "react";
import "./Login.css";

class LogIn extends Component {
  constructor(props) {
    super(props);
    this.emailRef = React.createRef();
    this.state = {
      email: "",
      password: "",
      registrationTime: "",
      isSubmitted: false,
    };
  }

  componentDidMount() {
    this.emailRef.current.focus();
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
            <div className="body02">
              <h2>Information</h2>
              <p>
                <b>Welcome: </b>
                <br />
                {this.state.email}
              </p>
              <p>
                <b>You are logged in to the account at </b>
                <br />
                {this.state.registrationTime}
              </p>
            </div>
          </>
        ) : (
          <>
            <div className="body01">
              <h2>Log In</h2>
              <form>
                <div>
                  <label>Email</label>
                  <br />
                  <input
                    type="email"
                    name="email"
                    ref={this.emailRef}
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
                    Log In
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

export default LogIn;
