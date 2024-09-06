import React, { useState, useEffect } from "react";
import "./Task3.css";

function Task3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="body03">
      <p className="pa3">Counter {count}</p>
    </div>
  );
}

export default Task3;
