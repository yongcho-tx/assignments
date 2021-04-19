// Write a function that takes an array of numbers and returns the largest (without using Math.max())

const largest = arr => arr.sort((a, b) => b - a)[0];
console.log(largest([3, 5, 2, 8, 1]))


// Write a function that takes an array of words and a character and returns each word that has that character present.
const lettersWithStrings = (arr, char) => arr.filter(el => el.includes(char));
console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));


// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.
const isDivisible = (num1, num2) => num1 % num2 == 0 ? true : false;
console.log(isDivisible(4, 2))