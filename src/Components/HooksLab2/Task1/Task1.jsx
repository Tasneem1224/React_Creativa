import React, { useState, useEffect } from "react";
import "./Task1.css";

function Task1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Current count is: ${count}`);
  });

  return (
    <div>
      <p className="pa1">Counter {count}</p>
      <button className="but1" onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  );
}

export default Task1;
