import React, { useState } from "react";
import ButtonBox from "./ButtonBox";
import "./Calculator.css";
import Screen from "./Screen";
import Button from "./Button";

function Calculator({ children }) {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];


  function numClickHandler() {
     
  }

  return (
    <div className="calculator">
      {children}
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick= {
                btn === "C"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalsClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
              }
 
            />
          )
        })}
      </ButtonBox>
    </div>
  );
}

export default Calculator;
