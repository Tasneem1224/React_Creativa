import React, { useState, useEffect } from "react";
import "./Task2.css";

function Task2() {
  const [username, setUsername] = useState("");
  const [greet, setGreet] = useState("");

  useEffect(() => {
    setGreet(`Welcome ${username}`);
  }, [username]);

  return (
    <div className="body02">
      <input
        className="inp2"
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <p className="pa2">{greet}</p>
    </div>
  );
}

export default Task2;
