// Variables
let firstNum;
let secondNum;
let tmpNumber = "";
let operator;
let result;

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

document.querySelector("body").addEventListener("keydown", function (e) {
  console.log(e.key);

  if (/\d/.test(e.key)) {
    tmpNumber += e.key;
    displayBox.textContent = tmpNumber;
  } else if (/[+*/-]/.test(e.key)) {
    if (tmpNumber !== "" && !firstNum) {
      firstNum = parseInt(tmpNumber);
      tmpNumber = "";
      operator = e.key;
    } else if (tmpNumber !== "" && firstNum) {
      secondNum = parseInt(tmpNumber);
      tmpNumber = "";
      operate(firstNum, secondNum, operator);

      operator = e.key;
    } else if (tmpNumber === "" && firstNum) {
      operator = e.key;
    }
  } else if (/=/.test(e.key) || e.key === "Enter") {
    if (firstNum && operator && tmpNumber) {
      secondNum = parseInt(tmpNumber);
      tmpNumber = "";
      operate(firstNum, secondNum, operator);
    } else if (firstNum && secondNum && operator) {
      operate(firstNum, secondNum, operator);
    }
  } else if (e.key === "Backspace") {
    clear();
    displayBox.textContent = "0";
  }
});

operatorBtns.forEach((operatorBtn) =>
  operatorBtn.addEventListener("click", function (e) {
    if (tmpNumber !== "" && !firstNum) {
      firstNum = parseInt(tmpNumber);
      tmpNumber = "";
      operator = e.target.value;
    } else if (tmpNumber !== "" && firstNum) {
      secondNum = parseInt(tmpNumber);
      tmpNumber = "";
      operate(firstNum, secondNum, operator);

      operator = e.target.value;
    } else if (tmpNumber === "" && firstNum) {
      operator = e.target.value;
    }
  })
);

equalButton.addEventListener("click", function (e) {
  if (firstNum && operator && tmpNumber) {
    secondNum = parseInt(tmpNumber);
    tmpNumber = "";
    operate(firstNum, secondNum, operator);
  } else if (firstNum && secondNum && operator) {
    operate(firstNum, secondNum, operator);
  }
});

clearButton.addEventListener("click", function () {
  clear();
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

const operate = function (fNum, sNum, oper) {
  if (sNum === 0 && oper === "/") {
    clear();
    displayBox.textContent = `You can't divide by zero!`;
  } else {
    switch (oper) {
      case "+":
        result = parseFloat(add(fNum, sNum).toFixed(10));
        break;
      case "-":
        result = parseFloat(subtract(fNum, sNum).toFixed(10));
        break;
      case "x":
        result = parseFloat(multiply(fNum, sNum).toFixed(10));
        break;
      case "*":
        result = parseFloat(multiply(fNum, sNum).toFixed(10));
        break;
      case "/":
        result = parseFloat(divide(fNum, sNum).toFixed(10));
        break;
      default:
        console.log("Error");
    }

    firstNum = result;
    secondNum = null;
    displayBox.textContent = result;
    operator = "";
  }
};

const clear = function () {
  firstNum = null;
  secondNum = null;
  result = null;
  operator = "";
  tmpNumber = "";
};
