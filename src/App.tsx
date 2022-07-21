import React, { useState } from "react";

import "./App.css";

const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPlay, setIsPlay] = useState(false);

  const handleToggleSave = () => {
    setIsActive(!isActive);
  };

  const handleTogglePlay = () => {
    setIsPlay(!isPlay);
  };

  return (
    <div className="App">
      <ul>
        <li>
          <div className="list-content">
            <button className="thumbnail"></button>

            <h3>Lorem ipsum </h3>
            <h4>Lorem ipsum</h4>

            <button
              className={isPlay ? "button-play" : "button-pause"}
              onClick={handleTogglePlay}
            ></button>

            <button
              className={isActive ? "button-save" : "button-saved"}
              onClick={handleToggleSave}
            ></button>
          </div>
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
};

export default App;
