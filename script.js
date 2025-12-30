const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  if (b === 0) return "Why are you doing like that? You know it's wrong.";
  return a / b;
};

const operate = function (op, a, b) {
  a = Number(a);
  b = Number(b);
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      return divide(a, b);
    default:
      return null;
  }
};

let firstNumber = "";
let operator = "";
let secondNumber = "";
let resetDisplay = false;

const numberButtons = document.querySelectorAll(
  "button:not(.op):not(.clear):not(.equal):not(.backspace)"
);
const operatorButtons = document.querySelectorAll(".op");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector(".equal");
const display = document.querySelector(".display");
const backspace = document.querySelector(".backspace");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const input = button.textContent;

    if (input === ".") {
      if (operator === "") {
        if (firstNumber.includes(".")) return;
        if (firstNumber === "") firstNumber = "0";
        firstNumber += ".";
        display.textContent = firstNumber;
      } else {
        if (secondNumber.includes(".")) return;
        if (secondNumber === "") secondNumber = "0";
        secondNumber += ".";
        display.textContent = secondNumber;
      }
      return;
    }

    if (resetDisplay) {
      firstNumber = button.textContent;
      display.textContent = firstNumber;
      resetDisplay = false;
      return;
    }
    if (operator === "") {
      firstNumber += button.textContent;
      display.textContent = firstNumber;
    } else {
      secondNumber += button.textContent;
      display.textContent = secondNumber;
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    resetDisplay = false;
    if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
      const result = operate(operator, firstNumber, secondNumber);

      let finalResult = result;
      if (typeof result === "number") {
        finalResult = Math.round(result * 10000000) / 10000000;
      }
      display.textContent = finalResult;
      if (typeof result !== "number") {
        firstNumber = "";
        operator = "";
        secondNumber = "";
        resetDisplay = true;
        return;
      }

      firstNumber = result.toString();
      secondNumber = "";
    }
    operator = button.textContent;
  });
});

equalButton.addEventListener("click", () => {
  if (firstNumber !== "" && operator !== "" && secondNumber !== "") {
    const result = operate(operator, firstNumber, secondNumber);
    let finalResult = result;
    if (typeof result === "number") {
      finalResult = Math.round(result * 10000000) / 10000000;
    }
    display.textContent = finalResult;
    if (typeof result !== "number") {
      firstNumber = "";
      operator = "";
      secondNumber = "";
      resetDisplay = true;
      return;
    }
    firstNumber = result.toString();
    operator = "";
    secondNumber = "";

    resetDisplay = true;
  }
});

clearButton.addEventListener("click", () => {
  firstNumber = "";
  operator = "";
  secondNumber = "";
  resetDisplay = false;
  display.textContent = "0";
});

backspace.addEventListener("click", () => {
  resetDisplay = false;
  if (operator === "") {
    firstNumber = firstNumber.slice(0, -1);
    // if (firstNumber.length === 0) {
    //   display.textContent = "0";
    // }
    display.textContent = firstNumber || "0";
  } else {
    secondNumber = secondNumber.slice(0, -1);
    display.textContent = secondNumber || "0";
  }
});
