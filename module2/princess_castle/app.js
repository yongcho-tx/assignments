const readlineSync = require('readline-sync');


class Player {
    constructor(name, totalCoins, status, hasStar = false, gameActive = true) {
        this.name = name;
        this.totalCoins = 0;
        this.status = 'Small';
        this.hasStar = false;
        this.gameActive = true;
    }

    setName(namePicked) {
        if(namePicked === 'Mario') {
            this.name = 'Mario';
        } else if(namePicked === 'Luigi') {
            this.name = 'Luigi'
        } 
    
    }
    //Options are as folllows: Powered Up, Big, Small, or Dead
    gotHit() {
        if(this.status === 'Powered Up' && this.hasStar === true) {
            console.log("You are protected by the star")
            this.hasStar = false;
        }
        else if(this.status === 'Powered Up') {
            this.status = 'Big';
        }
        else if(this.status === 'Big') {
            this.status = 'Small';
        }
        else if(this.status === 'Small') {
            this.status = 'Dead';
            this.gameActive = false;
        }
    }

    gotPowerup() {
        if(this.status === 'Powered Up') {
            console.log('You got a star!')
            this.hasStar = true;
        }
        else if(this.status === 'Big') {
            this.status = 'Powered Up';
        }
        else if(this.status === 'Small') {
            this.status = 'Big';
        }
    }

    addCoin() {
        this.totalCoins++;
    }

    print() {
        if(this.hasStar === true) {
            console.log('You have a star!')
        }
        console.log(`Name: ${this.name},\nTotal Coins: ${this.totalCoins}\nStatus: ${this.status}`)
    }

}
let charChoices = ['Mario', 'Luigi'];
const activePlayer = new Player();
let pickedCharName = readlineSync.keyInSelect(charChoices, 'Choose a character: 1 for Mario or 2 for Luigi', {cancel: 'Quit Game'});
activePlayer.setName(charChoices[pickedCharName])

const gamePlay = () => {
    min = Math.ceil(0);
    max = Math.floor(2);
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

    if(pickedCharName === -1) {
        gameActive = false;
        clearInterval(intervalID)
    }
    if(randomNum === 0) {
        activePlayer.gotHit();
    }
    if(randomNum === 1) {
        activePlayer.gotPowerup();
    }
    if(randomNum === 2) {
        activePlayer.addCoin();
    }
    activePlayer.print()

    if(activePlayer.gameActive === false) {
        clearInterval(intervalID);
    }
}

const intervalID = setInterval(gamePlay, 500)
