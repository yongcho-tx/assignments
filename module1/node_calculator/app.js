var readlineSync = require('readline-sync');


function calculate(num1, num2, operator) {
    if (operator === '+') {
        return parseInt(num1, 10) + parseInt(num2, 10);
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        return num1 / num2;
    } else {
        return "error";
    }
}

let num1 = readlineSync.question('Please enter your first number: ')
let num2 = readlineSync.question('Please enter your second number: ')
let operator = readlineSync.question('Please enter the operation to perform: +, -, *, /: ')

console.log("The result is: " + calculate(num1, num2, operator))