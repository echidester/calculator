// Variables
let firstNum;
let secondNum;
let operator;
let result;
let displayValue = "";
let tmpNumber = "";

// Element Selectors
const displayBox = document.querySelector("p");
const numberBtns = document.querySelectorAll(".number");
const operatorBtns = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

// Event Listeners
numberBtns.forEach((numberBtn) =>
  numberBtn.addEventListener("click", function (e) {
    tmpNumber += e.target.value;
    displayBox.textContent = tmpNumber;
  })
);

operatorBtns.forEach((operatorBtn) =>
  operatorBtn.addEventListener("click", function (e) {
    if (tmpNumber !== "" && !firstNum) {
      firstNum = parseInt(tmpNumber);
      tmpNumber = "";
      operator = e.target.value;
      console.log(
        `fN: ${firstNum}, sN: ${secondNum}, o: ${operator}, r: ${result}, tN: ${tmpNumber}`
      );
    } else if (tmpNumber !== "" && firstNum) {
      secondNum = parseInt(tmpNumber);
      tmpNumber = "";
      result = operate(firstNum, secondNum, operator);
      firstNum = result;
      secondNum = null;
      displayBox.textContent = result;
      operator = e.target.value;
      console.log(
        `fN: ${firstNum}, sN: ${secondNum}, o: ${operator}, r: ${result}, tN: ${tmpNumber}`
      );
    } else if (tmpNumber === "" && firstNum) {
      operator = e.target.value;
    }
  })
);

equalButton.addEventListener("click", function (e) {
  if (firstNum && operator && tmpNumber) {
    secondNum = parseInt(tmpNumber);
    tmpNumber = "";
    result = operate(firstNum, secondNum, operator);
    displayBox.textContent = result;
    firstNum = result;
    secondNum = null;
    operator = "";
    console.log(
      `fN: ${firstNum}, sN: ${secondNum}, o: ${operator}, r: ${result}, tN: ${tmpNumber}`
    );
  } else if (firstNum && secondNum && operator) {
    result = operate(firstNum, secondNum, operator);
    displayBox.textContent = result;
    firstNum = result;
    secondNum = null;
    operator = "";
    console.log(
      `fN: ${firstNum}, sN: ${secondNum}, o: ${operator}, r: ${result}, tN: ${tmpNumber}`
    );
  }
});

clearButton.addEventListener("click", function () {
  firstNum = null;
  secondNum = null;
  result = null;
  operator = "";
  tmpNumber = "";
  displayBox.textContent = "0";
});

// Functions

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
  return a / b;
};

const operate = function (firstNum, secondNum, operator) {
  switch (operator) {
    case "+":
      return add(firstNum, secondNum);
      break;
    case "-":
      return subtract(firstNum, secondNum);
      break;
    case "x":
      return multiply(firstNum, secondNum);
      break;
    case "/":
      return divide(firstNum, secondNum);
      break;
    default:
      console.log("Error");
  }
};
