import React, { useState, useEffect } from "react";
import "./Task5.css";

function Task5() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleButtonClick = () => {
    setClickCount((Count) => Count + 1);
  };

  return (
    <div>
      <p className="pa15">
        Mouse Position X: {mousePosition.x} , Y: {mousePosition.y}
      </p>
      <p className="pa25">Button Clicks {clickCount}</p>
      <button className="but5" onClick={handleButtonClick}>
        Click
      </button>
    </div>
  );
}

export default Task5;
