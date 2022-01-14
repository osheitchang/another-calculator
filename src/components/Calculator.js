import React from "react";
import "./Calculator.css";
import Screen from "./Screen";

function Calculator({ children }) {
  return (
    <div className="calculator">
      {children}
      <Screen />
    </div>
  );
}

export default Calculator;
