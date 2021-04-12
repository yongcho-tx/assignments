
const readline = require('readline-sync')

// initialize some variables for this game 

// create user object
const player = { 
    name: "", 
    hp: 100,
    attackPower: 10, 
    inventory: []
}

// enemy: 
// name, hp, attack power
class Enemy {
    constructor(name, hp, attackPower) { 
        this.name = name; 
        this.hp = hp; 
        this.attackPower = attackPower
    }
}

const voldemort = new Enemy("voldemort", 120, 40)
const mario = new Enemy("mario", 90, 5)

// enemies array
const enemiesArray = [voldemort, mario]

let gameActive = true

player.name = readline.question('May I have your name? ')
console.log(`Welcome, ${player.name}!`)

while( player.hp > 0 && gameActive){
    // the user should be able to: 
    //  walk (w)
    //  check their inventory (i)
    //  quit anytime they want to (q)
    let select = readline.keyIn('What would you like to do?', {limit: 'wiq'})

    if(select === 'w' || select === 'W') { 
        // walk
        console.log("walking")

        // algorithm that determines if the user will be attacked by an enemy or not
        // 25% chance of getting attacked 
        // generate a number between 1 and 4
        // if the number generated is === 1
        // run into a wild enemy 
        // else keep walking 
        let num = randomNumber(1, 4)
        if(num === 1) {
            console.log("youve come across an enemy")

            /*

            The enemy is random (can be chosen out of a minimum of 3 different enemy names)
            The user can decide to attack or run
            */

            // to generate a random enemy, 
            // genrerate a random index
            let index = randomNumber(0, enemiesArray.length) // generate anywhere from index 0 to last index of enemy array
            console.log(index)
            console.log(`Oh look! A ${enemiesArray[index].name} has appeared`)
            let action = readline.keyIn('What would you like to do? Attack or run', {limit: 'ar'})
            if (action === 'r')  { 
                console.log("youve chosen to run")
                num = randomNumber(1,2)
                if (num === 1) 
                    fight()
                 // user gets attacked

            }
            if (action === 'a') { 
                fight()
            }

        }
    }

    if(select === 'i' || select === 'I') { 
        // check their inventory 
        console.log("check inventory")
    }

    if(select === 'q' || select === 'Q') { 
        // quit
        gameActive = false
        console.log('Sorry you quit! Bye!')
    }
}

function randomNumber(min, max) { 
    // generate a number between 1 and max 
    return Math.floor(Math.random() * max) + min
}

function fight() { 
    // fight sequence happens here 
    // keep fighting until either the user or the enemy dies
}