import React, { Component } from "react";
import "./GetComments.css";
import axios from "axios";

class GetComments extends Component {
  state = {
    comments: [],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        this.setState({ comments: response.data });
      });
  }

  render() {
    const { comments } = this.state;

    return (
      <div className="body00">
        <div className="Comments">
          <h1>Comments</h1>
        </div>

        <div className="clist">
          {comments.map((comment) => (
            <div key={comment.id} className="ccard">
              <h2>{comment.name}</h2>
              <p>Email: {comment.email}</p>
              <p>{comment.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default GetComments;
