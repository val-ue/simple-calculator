const get = function (selector) {
    return document.querySelector(selector);
  };

const firstNumber = get('.first-number');
const secondNumber = get('.second-number');
const addButton = get('.add'); 
const subtractButton = get('.subtract'); 
const divideButton = get('.divide'); 
const multiplyButton = get('.multiply'); 
const result = get('.result'); 
const mathButtons = get('math-buttons');



const add = addButton.addEventListener('click', function() {
    let firstInput = parseInt(document.getElementById('first-input').value);
    let secondInput = parseInt(document.getElementById('second-input').value);

    if (isNaN(firstInput) || isNaN(secondInput)) { 
        result.innerText = `Please use numbers only`;

    } else {
        result.innerText = `${firstInput + secondInput}`;
    }
});

const subtract = subtractButton.addEventListener('click', function() {
    let firstInput = parseInt(document.getElementById('first-input').value);
    let secondInput = parseInt(document.getElementById('second-input').value);

    if (isNaN(firstInput) || isNaN(secondInput)) { 
        result.innerText = `Please use numbers only`;

    } else {
        result.innerText = `${firstInput - secondInput}`;
    }
});

const divide = divideButton.addEventListener('click', function() {
    let firstInput = parseInt(document.getElementById('first-input').value);
    let secondInput = parseInt(document.getElementById('second-input').value);

    if (isNaN(firstInput) || isNaN(secondInput)) { 
        result.innerText = `Please use numbers only`;

    } else {
        result.innerText = `${firstInput / secondInput}`;
    }
});

const multiply = multiplyButton.addEventListener('click', function() {
    let firstInput = parseInt(document.getElementById('first-input').value);
    let secondInput = parseInt(document.getElementById('second-input').value);

    if (isNaN(firstInput) || isNaN(secondInput)) { 
        result.innerText = `Please use numbers only`;

    } else {
        result.innerText = `${firstInput * secondInput}`;
    }
});



