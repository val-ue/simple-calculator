const get = function (selector) {
  return document.querySelector(selector);
};

const firstNumber = get(".first-number");
const secondNumber = get(".second-number");
const addButton = get(".add");
const subtractButton = get(".subtract");
const divideButton = get(".divide");
const multiplyButton = get(".multiply");
const result = get(".result");
const mathButtons = get("math-buttons");

const buttons = document.querySelectorAll("button");

const calculate = function (event) {
  let firstInput = parseInt(get("#first-input").value);
  let secondInput = parseInt(get("#second-input").value);

  if (isNaN(firstInput) || isNaN(secondInput)) {
    result.innerText = `Please use numbers only`;
    return;
  }

  let buttonType = event.target.innerText;

  if (buttonType === "+") {
    result.innerText = firstInput + secondInput;
  } else if (buttonType === "-") {
    result.innerText = firstInput - secondInput;
  } else if (buttonType === "/") {
    result.innerText = firstInput / secondInput;
  } else {
    result.innerText = firstInput * secondInput;
  }
};

buttons.forEach(function (button) {
  button.addEventListener("click", calculate);
});