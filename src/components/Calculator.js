import React from "react";
import ButtonBox from "./ButtonBox";
import "./Calculator.css";
import Screen from "./Screen";
import Button from "./Button";

function Calculator({ children }) {
  return (
    <div className="calculator">
      {children}
      <Screen />
      <ButtonBox />
      <Button />
    </div>
  );
}

export default Calculator;
