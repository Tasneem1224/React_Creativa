import React, { useState } from "react";
import "./Task7.css";
import axios from "axios";

function Task7() {
  const [postId, setPostId] = useState("");
  const [comments, setComments] = useState([]);
  const [error, setError] = useState(null);

  const fetchComments = (id) => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => {
        setComments(response.data);
        if (response.data.length === 0) {
          setError("No comments found for this postId");
        }
      })
      .catch(() => {
        setError("Failed to fetch comments");
      });
  };
  const handleSearch = () => {
    setComments([]);
    setError(null);

    if (postId.trim() === "") {
      setError("Please enter a valid postId");
      return;
    }

    fetchComments(postId);
  };

  /*************************************************************************************************** */
  return (
    <div className="body07">
      <h2 className="ha7">Search Comments by Post ID</h2>
      <input
        className="inp7"
        type="text"
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
        placeholder="Enter postId"
      />
      <button className="but7" onClick={handleSearch}>
        Search
      </button>

      {error && <p className="error-message">{error}</p>}

      <div className="comments7">
        {comments.map((comment) => (
          <div className="card7" key={comment.id}>
            <p className="pa17">{comment.name}</p>
            <p className="pa27">
              <b>Email : </b> {comment.email}
            </p>
            <p className="pa37">{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task7;
