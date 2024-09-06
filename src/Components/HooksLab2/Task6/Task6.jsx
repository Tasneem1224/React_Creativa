import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Task6.css";

function Task6() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
      });
  }, []);

  return (
    <div className="body06">
      <h2 className="he6">Comments List</h2>
      <div className="comments6">
        {comments.map((comment) => (
          <div className="card6" key={comment.id}>
            <p className="pa16">{comment.name}</p>
            <p className="pa26">
              <b>Email : </b> {comment.email}
            </p>
            <p className="pa36">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task6;
