import React, { Component } from "react";
import "./AddData.css";
import axios from "axios";

class AddData extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      comment: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("https://jsonplaceholder.typicode.com/comments", this.state)
      .then((response) => {
        console.log("Posted Comment:", response.data);
      });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
        </div>
        <div>
          <label>Comment:</label>
          <textarea
            name="comment"
            value={this.state.comment}
            onChange={this.handleChange}
            required
          />
        </div>
        <button type="submit" className="sup">
          Submit
        </button>
      </form>
    );
  }
}

export default AddData;
