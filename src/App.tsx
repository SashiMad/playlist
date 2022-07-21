import React, { useState } from "react";

import "./App.css";

function App() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="App">
      <ul>
        <li>
          <button className="thumbnail"></button>

          <h3>Lorem ipsum</h3>
          <h4>Lorem ipsum</h4>

          <button className="button-play"></button>

          <button
            className={isActive ? "button-save" : "button-saved"}
            onClick={handleToggle}
          ></button>
        </li>
        <li>
          <button className="thumbnail"></button>
          <h3>Lorem ipsum</h3>
          <h4>Lorem ipsum</h4>
          <button className="button-pause"></button>
          <button className="button-saved"></button>
        </li>
        <li>
          <h3>Lorem ipsum</h3>
          <h4>Lorem ipsum</h4>
        </li>
        <li>
          <h3>Lorem ipsum</h3>
          <h4>Lorem ipsum</h4>
        </li>
        <li>
          <h3>Lorem ipsum</h3>
          <h4>Lorem ipsum</h4>
        </li>
      </ul>
    </div>
  );
}

export default App;
