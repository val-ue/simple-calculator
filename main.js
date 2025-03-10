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
const firstInput = get("#first-input");
const secondInput = get("#second-input");

const buttons = document.querySelectorAll("button");

firstInput.addEventListener("input", function() {
  if (isNaN(parseInt(firstInput.value))) {
    firstInput.style.boxShadow = "0px 0px 5px rgb(240, 61, 61)"; 
    firstInput.style.backgroundColor = "rgb(250, 213, 255)";
  } else {
    firstInput.style.boxShadow = "0px 0px 5px #61c5fa"; 
    firstInput.style.backgroundColor = "white"; 
  }
});

const validate = function (input) {
  if (isNaN(parseInt(input.value))) {
    input.style.boxShadow = "0px 0px 5px rgb(240, 61, 61)"; 
    input.style.backgroundColor = "rgb(250, 213, 255)";
  } else {
    input.style.boxShadow = "0px 0px 5px #61c5fa"; 
    input.style.backgroundColor = "white"; 
  }
};

firstInput.addEventListener("input", function() {
  validate(firstInput);
});

secondInput.addEventListener("input", function() {
  validate(secondInput);
});

const calculate = function (event) {
  const firstInput = parseInt(get("#first-input").value);
  const secondInput = parseInt(get("#second-input").value);

  if (isNaN(firstInput) || isNaN(secondInput)) {
    result.innerText = `Please use numbers only`;
    return;
  }

  const buttonType = event.target.innerText;

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