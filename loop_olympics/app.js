// 1. Write a for loop that prints to the console the numbers 0 through 9.
    for (let i = 0; i < 10; i++) {
        // console.log(i);
    }
// 2. Write a for loop that prints to the console 9 through 0.
    for (let i = 9; i >= 0; i--) {
        // console.log(i)
    }
// 3. Write a for loop that prints these fruits to the console.
const fruit = ["banana", "orange", "apple", "kiwi"]
for (let i = 0; i < fruit.length; i++) {
    // console.log(fruit[i])
}

//=======Bronze Medal===========

// 1. Write a for loop that will push the numbers 0 through 9 to an array.

let arr = [];
for (let i = 0; i < 10; i++) {
    arr.push(i);
}
console.log(arr);

// 2. Write a for loop that prints to the console only even numbers 0 through 100.
for (let i = 0; i < 101; i+=2) {
    console.log(i);
}

// 3. Write a for loop that will push every other fruit to an array.
const fruitBronze = ["banana", "orange", "apple", "kiwi", "pear", "peach"];

for (let i = 0; i < fruitBronze.length; i+= 2) {
    console.log(fruitBronze[i]);
}

//===========Silver Medal============

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]
// 1. Write a loop that will print out all the names of the people of the people array
let namesArray = []
for (let i = 0; i < peopleArray.length; i++) {
    namesArray.push(`${peopleArray[i].name}`);
}
console.log(namesArray);
// 2. Write a loop that pushes the names into a names array, and the occupations into an occupations array.
let names = [];
let occupations = [];

for (let i = 0; i < peopleArray.length; i++) {
    names.push(`${peopleArray[i].name}`);
    occupations.push(`${peopleArray[i].occupation}`)
}
console.log(names);
console.log(occupations);
// 3. Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", and every other occupation to another array starting with, in this case, "Singer".

let everyOtherName = [];
let everyOtherOccupation = [];

for (let i = 0; i < peopleArray.length; i+=2) {
    everyOtherName.push(peopleArray[i].name);
}
console.log(everyOtherName);

for (let i = 1; i < peopleArray.length; i+=2) {
    everyOtherOccupation.push(peopleArray[i].occupation);
}
console.log(everyOtherOccupation);


//===========Gold Medal - Nesting============
