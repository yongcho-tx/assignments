// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
    //check data types first and throw error
    if(isNaN(x) || isNaN(y)) {
        throw 'Parameter is not a number'
    } else if (typeof x ==='string' || typeof y === 'string') {
        throw 'Parameter is a string'
      } else {

      }  return x + y;
    }

try {
    sum("1", "2")
} catch(err) {
    console.log(err)
}
//   1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

console.log(sum(5, 2))

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
  //check credentials
  if(username !== 'sam' && password !== '123abc') {
      throw 'You have entered incorrect username / password'
  } else {
      throw 'login successful'
  }
}

try {
    login("sam", "123abc")
} catch(err) {
    console.log(err)
}

try {
    login("sa", "12abc")
} catch(err) {
    console.log(err)
}