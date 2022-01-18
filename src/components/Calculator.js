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

  function numClickHandler(e) {
    e.preventDefault();
    const value = e.target.innerHTML;
    console.log(value)
    console.log(toString(calc.num).length)
    if (true) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? 0
            : calc.num % 1 === 0
            ? Number(calc.num + value)
            : calc.num + value,
        res: !calc.sign ? 0 : calc.res,
      });
    }
  }

  const commaClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHtml;

    setCalc({
      ...calc,
      num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
    });
  };

  const signClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHtml;
    setCalc({
      ...calc,
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0,
    });
  };

  const equalClickHandler = (e) => {
    if (calc.sign && calc.num) {
      const math = (a, b, sign) =>
        sign === "+"
          ? a + b
          : sign === "-"
          ? a - b
          : sign === "X"
          ? a * b
          : a / b;

      setCalc({
        ...calc,
        res:
          calc.num === "0" && calc.sign === "/"
            ? "Can't devide by 0"
            : math(Number(calc.res), Number(calc.num), calc.sign),
        sign: "",
        num: "0",
      });
    }
  };

  const invertClickHandler = () => {
    setCalc({
      ...calc,
      num: calc.num ? calc.num * -1 : 0,
      res: calc.res ? calc.res * 1 : 0,
      sign: "",
    });
  };

  const percentClickHandler = () => {
    let num = calc.num ? parseFloat : 0;
    let res = calc.res ? parseFloat : 0;

    setCalc({
      ...calc,
      num: (num /= Math.pow(100, 1)),
      res: (res /= Math.pow(100, 1)),
      sign: "",
    });
  };

  const resetClickHandler = (e)=> {
    setCalc({
      ...calc,
      sign: "",
      num: 0,
      res: 0,
    });
  };
  
  //Add spaces for the Thousand Mark
  const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");
  //Remove the spaces of the Thousand mark
  const removeSpaces = (num) => num.toString().replace(/\s/g, "");


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
              onClick={
                btn === "C"
                  ? resetClickHandler
                  : btn === "+-"
                  ? invertClickHandler
                  : btn === "%"
                  ? percentClickHandler
                  : btn === "="
                  ? equalClickHandler
                  : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                  ? signClickHandler
                  : btn === "."
                  ? commaClickHandler
                  : numClickHandler
              }
            />
          );
        })}
      </ButtonBox>
    </div>
  );
}

export default Calculator;
