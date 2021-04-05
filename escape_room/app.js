const readlineSync = require('readline-sync');

let name = readlineSync.question(`What is your name? `);
let startMessage = `${name}, please choose from the following options to escape the room:`
console.log(startMessage);



let stillAlive = true;
let hasKeyInHand = false;

while (stillAlive) {
    const escapeMoves = ['Put hand in hole', 'Find the key, or', 'Open the door'];
    let index = readlineSync.keyInSelect(escapeMoves, 'Choose from the following list', {cancel: 'Quit'});
    if (index == 0) {
        console.log(`You chose to put your hand in a hole. Game over, ${name}!`)
        stillAlive = false;
    } else if (index == 1 && hasKeyInHand == false) {
        console.log(`You found the key!`);
        hasKeyInHand = true;
    } else if (index == 1 && hasKeyInHand == true) {
        console.log(`You already have the key but you chose to find the key again. Make a wiser choice to escape the room!`);
    } else if (index == 2 && hasKeyInHand == false) {
        console.log(`You chose to open the door but you do not have the key.  Go find the key first.`);
    } else if (index == 2 && hasKeyInHand == true) {
        console.log(`Congratulations, you have escaped the room!`);
        stillAlive = false;
    }
}