// Variables
let firstNum;
let secondNum;
let operator;
let displayValue = "";

// Element Selectors
const buttonsToDisplay = document.querySelectorAll(".number, .operator");
const displayBox = document.querySelector("p");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

// Event Listeners
buttonsToDisplay.forEach((button) =>
  button.addEventListener("click", function (e) {
    displayValue = displayValue + e.target.value;
    displayBox.textContent = displayValue;
  })
);

equalButton.addEventListener("click", function (e) {
  let index = displayValue.search(/-|\/|x|\+/);
  firstNum = parseInt(displayValue.slice(0, index));
  operator = displayValue.slice(index, index + 1);
  secondNum = parseInt(displayValue.slice(index + 1));

  displayBox.textContent = operate(firstNum, secondNum, operator);
});

clearButton.addEventListener("click", function () {
  displayValue = "";
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
