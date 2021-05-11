// Replace all the vars with let and const. Alter the code however necessary to make sure this continues to work 
// (so the pet's name isn't "John", but instead "spot" is returned). You only need to delete var and insert let and const
// John is the pet owner, and his name should be stored differently than the other names.

const name = "John"
const  age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


// Task 1
// Re-write this .map() using an arrow function:

// Be aware that if JavaScript sees a { directly after the => it will think it's starting a function, and not starting an object, so the : will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

// function mapVegetables(arr) {
//     return arr.map(function(carrot) {
//         return { type: "carrot", name: carrot }
//     })
// }
const mapVegetables = arr => arr.map(carrot => ({type: "carrot", name: carrot}))
console.log(mapVegetables(carrots))

// Task 2
// Re-write this .filter() using an arrow function:

const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

// function filterForFriendly(arr) {
//     return arr.filter(function(person) {
//         return person.friendly
//     })
// }

const filterForFriendly = arr => arr.filter(friend => friend.friendly)
console.log(filterForFriendly(people));


// Task 3
// Re-write the following functions to be arrow functions:
// function doMathSum(a, b) {
//     return a + b
// }

const doMathSum = (a, b) => a + b;
console.log(doMathSum(1, 5))

// var produceProduct = function(a, b) {
//     return a * b
// }

const produceProduct = (a, b) => a * b;
console.log(produceProduct(2, 7))

// Task 4
// Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
// Hi Kat Stark, how does it feel to be 40?

const printString = (firstName = 'Jane', lastName = 'Doe', age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`
console.log(printString('fabio', 'benny', 29))

// Task 5
// Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
    {
        type: "dog",
        name: "theodore"
    },
    {
        type: "cat",
        name: "whiskers"
    },
    {
        type: "pig",
        name: "piglette"
    },
    {
        type: "dog",
        name: "sparky"
    }
 ];
 
//  function filterForDogs(arr) {
//      return arr.filter(animal => {
//          if (animal.type === "dog") {
//              return true
//          } else {
//              return false
//          }
//      })
//  }

const filterForDogs = arr => arr.filter(animal => animal.type === 'dog' ? true : false);
console.log(filterForDogs(animals))


// Template Literals
// Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:

// Hi Janice!

// Welcome to Hawaii. 

// I hope you enjoy your stay. Please ask the president of Hawaii if you need anything. 

const greeting = (location, userName) => `Hi ${userName}! \nWelcome to ${location}. \nI hope you enjoy your stay. Please ask the president of ${location} if you need anything.`
console.log(greeting('Singapore', 'Roger'))