var readlineSync = require('readline-sync');


function calculate(num1, num2, operator) {
    if (operator === 'add') {
        return parseInt(num1, 16) + parseInt(num2, 16);
    } else if (operator === 'sub') {
        return num1 - num2;
    } else if (operator === 'mul') {
        return num1 * num2;
    } else if (operator === 'div') {
        return num1 / num2;
    } else {
        return "error";
    }
}

let num1 = readlineSync.question('Please enter your first number: ')
let num2 = readlineSync.question('Please enter your second number: ')
let operator = readlineSync.question('Please enter the operation to perform: add, sub, mul, div: ')

console.log("The result is: " + calculate(num1, num2, operator))