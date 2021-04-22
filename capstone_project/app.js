
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
const wario = new Enemy("wario", 90, 5)
const arlo = new Enemy("arlo", 150, 20)
const april = new Enemy("april", 200, 50)
const may = new Enemy('may', 100, 1)
// enemies array
const enemiesArray = [voldemort, wario, arlo, april, may]
console.log(voldemort.hp);
const randomEnemy = randomNumber(0, enemiesArray.length)

let gameActive = true
let enemyIsAlive = true

player.name = readline.question('May I have your name? ')
let greeting = readline.question(`Hello ${player.name}! Are you ready to attempt to survive the month of April? Press enter at your own risk`);


console.log(`Welcome to April survival and good luck! ${player.name}!`)

while (player.hp > 0 && gameActive ) {
    // the user should be able to: 
    //  walk (w)
    //  check their inventory (i)
    //  quit anytime they want to (q)
    let select = readline.keyIn('What would you like to do? Enter \'w\' to walk, \'i\' to check inventory or \'q\' to quit game: ', {limit: 'wiq'})



    if (select === 'w' || select === 'W') { 
        // walk
        console.log("you are walking")

        // algorithm that determines if the user will be attacked by an enemy or not
        // 25% chance of getting attacked 
        // generate a number between 1 and 4
        // if the number generated is === 1
        // run into a wild enemy 
        // else keep walking 
        let num = randomNumber(1, 4)
        if (num === 1) {
            console.log("You've come across an enemy")

            /*

            The enemy is random (can be chosen out of a minimum of 3 different enemy names)
            The user can decide to attack or run
            */

            // to generate a random enemy, 
            // genrerate a random index

            console.log(`Oh look! ${enemiesArray[randomEnemy].name} has appeared`)
            console.log(enemiesArray[randomEnemy].name)
            let action = readline.keyIn('What would you like to do? Attack \'a\' or run \'r\': ', {limit: 'ar'})
            

            
            if (action === 'r')  { 
                console.log("You've chosen to run")
                num = randomNumber(1, 2)
                if (num === 1) {
                    
                    console.log('You are being attacked!')
                    console.log(num)
                    fight()
                }    
                 // user gets attacked
                if (num === 2) {
                    console.log('You have run away from the enemy')
                    console.log(num);
                }
            }  
            else if(enemyIsAlive ===true && action === "a") {
                
                    console.log("You've chosen to fight")
                    fight()
                
            }  
         }
           

        }
    

    if (select === 'i' || select === 'I') { 
        // check their inventory 
        console.log("Check inventory")
        playerInventory();
    }

    if (select === 'q' || select === 'Q') { 
        // quit
        gameActive = false
        console.log('Sorry you quit! Bye!')
    }

}
function randomNumber(min, max) { 
    // generate a number between 1 and max 
    return Math.floor(Math.random() * max) + min
}

function attackDamage (attackDmg) {
    attackDmg = randomNumber(1, 50);
    return attackDmg;
}

function tool() {
    const tools = ['Zapper', 'Brick', 'Hammer', 'Sword']
    let toolsRandom = randomNumber(0, tools.length)
    let toolChoice = tools[toolsRandom]
    return toolChoice
}

function playerHP() {
    player.hp = player.hp - attackDamage();
    return player.hp;
}
function enemyHP() {
    const remainingEnemyHP = enemiesArray[randomEnemy].hp - attackDamage();
     return remainingEnemyHP

    
}
console.log(enemyHP())

function rewardItems() {
    let items = ['Health spray', 'Booze', 'Flute', 'Harp'];
    let itemsRandom = randomNumber(0, items.length);
    let itemRewarded = items[itemsRandom];
    player.inventory.push(itemRewarded);
    return itemRewarded;
}

function playerInventory() {
    console.log(`\n\n ${player}`);
    return player.inventory
}

function fight() { 
    // fight sequence happens here
    while(enemyIsAlive === true && playerHP > 0){ 
    playerAttackPower = randomNumber(1, 50)
    enemyAttackPower = randomNumber(1, 50)
    if (playerHP > enemyHP && enemyHP === 0) {
        console.log(`You attacked your enemy with a ${tool()}. \nThe enemy has ${enemyHP()} 
        and you have ${playerHP()} HP left. \n You won ${rewardItems()}`)
    }  if (playerHP === 0) {
        console.log("You died, you could not survive the cruelest month of April")
    } if(enemyHP===0){
        enemyIsAlive = false
    }
     else   {
        console.log(`You attacked your enemy with a ${tool()}. \nThe enemy has ${enemyHP()} and you have ${playerHP()} HP left`)
     }
    }



    // keep fighting until either the user or the enemy dies
}