import React, { useState } from "react";
import { ReactComponent as Map } from "./Diplomacy.svg";

import "./App.css";

function App() {
  const [active, setActive] = useState();
  const clicked = (e) => {
    const existing = document.getElementsByClassName("active");
    existing[0] && existing[0].classList.remove("active");
    document.getElementById(e.target.id).classList.add("active");
  };
  return (
    <div className="App">
      <header className="App-header">
        <Map onClick={clicked}></Map>
      </header>
    </div>
  );
}

export default App;
