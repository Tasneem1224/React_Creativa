import React, { useState } from "react";
import "./AddRemove.css";

function AddRemove2() {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    setCounter(counter > 1 ? counter - 1 : counter);
  };

  return (
    <div className="body2">
      <div className="add2">
        <ul>
          <li>
            <button className="bu2" onClick={handleRemove}>
              -
            </button>
          </li>
          <li>
            <label>{counter}</label>
          </li>
          <li>
            <button className="bu2" onClick={handleAdd}>
              +
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AddRemove2;



