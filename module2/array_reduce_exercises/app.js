// 1) Turn an array of numbers into a total of all the numbers
const total = arr => arr.reduce((a, b) => a + b)
console.log(`Numbers added within the array:`)
console.log(total([1,2,3])); // 6

//  2) Turn an array of numbers into a long string of all those numbers.
const stringConcat = arr => arr.reduce((a, b) => a.toString() + b.toString())
console.log(stringConcat([1,2,3])); // "123"
console.log(typeof(stringConcat([1,2,3])))

// 3) Turn an array of voter objects into a count of how many people voted
const totalVotes = arr => voters.map(el => el.voted).reduce((a, b) => a + b)
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 console.log(totalVotes(voters)); // 7


//  4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
const shoppingSpree = arr => wishlist.map(num => num.price).reduce((a, b) => a + b)
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 console.log(`The price of all items in wishlist combined:`)
 console.log(shoppingSpree(wishlist)); // 227005