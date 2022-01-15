import React, { useState } from "react";
import "./App.css";
import Calculator from "./components/Calculator";

function App() {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  return (
    <div className="app">
      <Calculator />
    </div>
  );
}

export default App;
