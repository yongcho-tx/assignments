// Write a function that takes a string as a parameter and returns the same string 
// in all capital letters followed by all lowercase letters.

function capitalizeAndLowercase(str) {
    strUpper = str.toUpperCase();
    strLower = str.toLowerCase();
    return strUpper + strLower;
}

let testCaseOne = capitalizeAndLowercase("Hello");
console.log(testCaseOne);


// Write a function that takes a string as a parameter and returns a number 
// that is half the string's length, rounded down.

function findMiddleIndex(strTwo) {
    strTwo = strTwo.length / 2;
    return Math.floor(strTwo);
}
let testCaseTwo = findMiddleIndex('this exercise is very entertaining');
console.log(testCaseTwo);

// Write a function that uses slice() and the other functions you've written to
//  return the first half of the given string.

function returnFirstHalf(strThree) {
    strThree.split('');
    return strThree.slice(0, findMiddleIndex(strThree));
}
let testCaseThree = returnFirstHalf("Hello");
console.log(testCaseThree);


// Write a function that takes a string as a parameter and returns that string 
// where the first half is capitalized, and the second half is lowercase.

function capilizeAndLowercase(strFour) {
    strFour = strFour.split('');
    leftEven = strFour.slice(0, strFour.length / 2).join('').toUpperCase();
    rightEven = right = strFour.slice(strFour.length / 2).join('').toLowerCase();
    leftOdd = strFour.slice(0, Math.floor(strFour.length) / 2).join('').toUpperCase();
    rightOdd = right = strFour.slice(Math.floor(strFour.length)  /2).join('').toLowerCase();
    
    return strFour.length % 2 == 0 ? leftEven + rightEven : leftOdd + rightOdd;
  }

let testCaseFour = capilizeAndLowercase("Hello");
console.log(testCaseFour);

// ============Optional==========
// Write a function that takes a string as a parameter and capitalizes any character that follows a space.

function capitalize(strFive) {
    let splitWords = strFive.replace(/\s+/g, ' ').split(' ');
    return splitWords.map(eachWord => eachWord[0].toUpperCase() + eachWord.slice(1)).join(' ');
}

let testCaseFive = capitalize("hey friends! practice practice practice!");
console.log(testCaseFive);


function capitalizeVTwo(strSix) {
    return strSix.replace(/(^\w{1})|(\s+\w{1})/g, firstLetter => firstLetter.toUpperCase().replace(/\s+/g, ' '));
}

let testCaseSix = capitalizeVTwo("hey   friends!   practice practice practice!");
console.log(testCaseSix);