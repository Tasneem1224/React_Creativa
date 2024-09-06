import React, { useState, useEffect } from "react";
import "./Task4.css";

function Task4() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <p className="pa4">Current Window Width: {windowWidth}px</p>
    </div>
  );
}

export default Task4;
