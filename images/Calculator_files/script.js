const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const multiply = function(num1,num2) {
  return num1 * num2;
};

const divide = function(num1,num2) {
    return num1/num2;
}

let number1 = 0;
let number2 = 0;
let operator = 0;

function operate(number1, operator, number2){
    if(operator === '+') {
        return add(number1,number2)
    } else if (operator === '-') {
        return substract(number1,number2)
    } else if (operator === '*') {
        return multiply(number1,number2)
    } else if (operator === '/') {
        return divide(number1,number2)
    } else 
    return 'try again'
}

const screenNum = document.querySelectorAll('button');
const scren = document.querySelector('#screen');

screenNum.addEventListener('click',()=> {
        scren.textContent = "1";
    });

