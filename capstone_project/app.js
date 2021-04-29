const readline = require('readline-sync')

const player = { 
    name: "", 
    hp: 300,
    attackPower: 30, 
    inventory: ['Flashlight']
}

class Enemy {
    constructor(name, hp, attackPower) { 
        this.name = name; 
        this.hp = hp; 
        this.attackPower = attackPower
    }
}

const siri = new Enemy("Siri", 120, 30)
const charsiu = new Enemy("Charsiu", 90, 5)
const arlo = new Enemy("Arlo", 150, 20)
const april = new Enemy("April", 180, 40)
const may = new Enemy('May', 100, 1)
const enemiesArray = [siri, charsiu, arlo, april, may]
let randomEnemy
let gameActive = true
let enemyIsAlive = true

const enemyAttack = () => randomNumber(1, enemiesArray[randomEnemy].attackPower);
const randomNumber = (min, max) => Math.floor(Math.random() * max) + min
    // generate a number between 1 and max 
const playerAttack = () => randomNumber(1, player.attackPower)
const playerHP = () => player.hp = player.hp - enemyAttack()
const enemyHP = () => enemiesArray[randomEnemy].hp = enemiesArray[randomEnemy].hp - playerAttack()
const weapons = () => {
        const weaponsArray = ['Zapper', 'Brick', 'Hammer', 'Sword']
        let weaponsRandom = randomNumber(0, weaponsArray.length)
        let weaponsChoice = weaponsArray[weaponsRandom]
        return weaponsChoice
    }
const rewardItems = () => {
        let items = ['Health spray', 'Booze', 'Flute', 'Harp'];
        let itemsRandom = randomNumber(0, items.length);
        let itemRewarded = items[itemsRandom];
        player.inventory.push(` ${itemRewarded}`);
        console.log(`You have been rewared with ${itemRewarded}`)
        return itemRewarded
    }
const playerInventory = () => {
        console.log(`\n${player.inventory}\n`);
        if(readline.question(`To view game status, type 'Print' or 'p' `, {limit: ['p', 'Print']})) {
            console.log(`\nYour current HP is ${player.hp}HP\n and you have the following items in your inventory [${player.inventory}]`)
        }
        // return player.inventory
    }

player.name = readline.question('Enter your name: ')
let greeting = readline.question(`Hello ${player.name}! Are you ready to attempt to survive the month of April? [Hit 'Enter' key to begin at your own risk]`);
console.log(`Welcome to the month of April survival game. Good luck, ${player.name}!`)


while (player.hp > 0 && gameActive) {

    let select = readline.keyIn('What would you like to do? Enter \'w\' to walk, \'i\' to check inventory or \'q\' to quit game: ', {limit: '`wiq`'})
    if (select === 'w' || select === 'W') { 
        console.log("==================\nYou are walking\n==================")
        let num = randomNumber(1, 4)
        randomEnemy = randomNumber(0, enemiesArray.length)
        if (num === 1) {
            console.log(`#####################################################\nYou've come across an enemy! ${enemiesArray[randomEnemy].name} has appeared!\n#####################################################`)
            // console.log(enemiesArray[randomEnemy].name)
            let action = readline.keyIn('\nWhat would you like to do? Attack \'a\' or run \'r\': \n', {limit: 'ar'})
            
            if (action === 'r')  { 
                console.log("You chose to run")
                num = randomNumber(1, 2)
                if (num === 1) {
                    console.log('You are being attacked!')
                    fight()
                }    
                 // user gets attacked
                if (num === 2) {
                    console.log('You have run away from the enemy')
                }
            }  
            else if(enemyIsAlive === true && action === "a") {
                    console.log("***********************\nYou chose to fight\n***********************")
                    fight()
            }  
         }
        }
    
    if (select === 'i' || select === 'I') { 
        // check their inventory 
        console.log("=====Player Inventory=====")
        playerInventory();
    }
    if (select === 'q' || select === 'Q') { 
        // quit
        gameActive = false
        console.log('You quit the game! Bye!')
    }
}

function fight() { 
    // fight sequence happens here
    while (player.hp > 0 && enemiesArray[randomEnemy].hp > 0) {
           if (enemiesArray[randomEnemy].hp > 0 && player.hp > 0) {
               enemyHP()
               playerHP()
               console.log(`You attacked your enemy with a ${weapons()}. \nThe enemy has ${enemiesArray[randomEnemy].hp} HP and you have ${player.hp} HP left`)
            //    action = readline.keyIn('What would you like to do? Attack \'a\' or run \'r\': ', {limit: 'ar'})
           }
           if (player.hp < 1) {
               gameActive = false
               console.log(`!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n You died in the hands of ${enemiesArray[randomEnemy].name} \n !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!`)
           }
           if (enemiesArray[randomEnemy].hp < 1 && player.hp > 0) {
                console.log(`You have killed ${enemiesArray[randomEnemy].name} and you have won ${rewardItems()}`)
                player.hp += randomNumber(1, 100)
               enemiesArray.splice(randomEnemy, 1)
               console.log(enemiesArray)
               if(enemiesArray.length === 0) {
                   console.log(`****************************\n You have finished the game \n****************************`)
                   gameActive = false
               }
               break
           }  
        }         
}