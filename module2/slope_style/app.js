// Use the Rest Operator to help this function return an array of animals,
//  no matter how many animals are passed to it:


//============Green================
function collectAnimals(...animals) {  
    return animals
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));
// ["dog", "cat", "mouse", "jackolope", "platypus"]


// Write a function that returns a food object with the array names as 
// properties using Object Literals:

const combineFruit = (fruit, sweets, vegetables) => ({fruit, sweets, vegetables})

// or

const combineFruit2 = (...food) => {
    let [fruit, sweets, vegetables] = food
    return {fruit, sweets, vegetables}
}
console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))

console.log(combineFruit2(["apple", "pear"],
["cake", "pie"],
["carrot"]))
//=> {
    //     fruit: ["apple", "pear"],
    //     sweets: ["cake", "pie"],
    //     vegetables: ["carrot"]
    //  }


    // Use destructuring to use the property names as variables. Desructure the object in the parameter:

    const vacation = {  
        location: "Burly Idaho",
        duration: "2 weeks"
      };
      
      function parseSentence({location, duration}){
        return `We're going to have a good time in ${location} for ${duration}`
      }

      console.log(parseSentence(vacation))


    //   Use destructuring to make this code ES6:

    function returnFirst(items){
        const [first]= items; /*change this line to be es6*/
        return first
    }
console.log(returnFirst(['green', 'blue', 'red']))

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let [firstFav, secondFav, thridFav, fourthFav, fifthFav] = arr;
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thridFav}.`
}

console.log(returnFavorites(favoriteActivities))


// ============Blue==============

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. 
// You will need to change how the arrays are passed in. 
// You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(...animals) {  
    return [].concat(...animals)
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals)); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


// ============Single Diamond=============

// Try to make the following function more ES6xy:

// function product(a, b, c, d, e) {  
//     var numbers = [a,b,c,d,e];
  
//     return numbers.reduce(function(acc, number) {
//       return acc * number;
//     }, 1)
//   }

const product = (a, b, c, d, e) => [a, b, c, d, e].reduce((acc, num) => acc * num)
console.log(product(1, 2, 3, 4, 5))

// Make the following function more ES6xy. Use at least both the rest and spread operators:

// function unshift(array, a, b, c, d, e) {  
//     return [a, b, c, d, e].concat(array);
//   }

const unshift = (a, b, c, d, e, ...array) => [a, b, c, d, e].concat(...array)
console.log(unshift(1, 2, 3, 4, 5, ['a', 'b', 'c']))

// ==============Double Diamond=============

// Write some destructuring code to help this function out. Use object literals to simplify it:

function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [firstName, lastName] = name
        return {
            firstName,lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]