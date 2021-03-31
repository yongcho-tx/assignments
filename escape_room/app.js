const readlineSync = require('readline-sync');

// while (true) {
//     input = readlineSync.prompt();
//     console.log('-- You said "' + input + '"');
//     if (input === 'bye') {
//       break;
//     }
//   }
//   console.log('It\'s exited from loop.');


const name = readlineSync.question('What is your name? ');
const op1 = readlineSync.question("1. Put hand in hole")
const op2 = readlineSync.question("2. Find the key, or")
const op3 = readlineSync.question("3. Open the door");
console.log('Hello ' + name + "Choose from the following options: " + op1 + " " + op2 + " " + op3)