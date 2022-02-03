import React, { Component, useState } from "react";
import "./../styles/App.css";

function App() {
  const [flag, setFlag] = useState(false);
  const showPara = () => {
    setFlag(true);
  };
  return (
    <div id="main">
      <button id="click" onClick={showPara}>
        click
      </button>
      {flag && (
        <p id="para">
          {" "}
          Hello, I've learnt to use the full-stack evaluation tool. This makes
          me so happy
        </p>
      )}
    </div>
  );
}

export default App;
