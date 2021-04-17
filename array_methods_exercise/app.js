var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function multi() {
    let rmLastVege = vegetables.pop();
    let rmFirstFruit = fruit.shift();
    let indexOfOrange = fruit.indexOf('orange');
    fruit.push(indexOfOrange);
    let lengthOfVege = vegetables.length;
    vegetables.push(lengthOfVege);
    let food = fruit.concat(vegetables);
    food.splice(4, 2);
  return food.reverse().join();
    

}

console.log(multi())
//1. Remove the last item from the vegetable array.
//2.  Remove the first item from the fruit array.
//3.  Find the index of "orange."
//4.  Add that number to the end of the fruit array.
//5.  Use the length property to find the length of the vegetable array.
//6.  Add that number to the end of the vegetable array.
//7.  Put the two arrays together into one array. Fruit first. Call the new Array "food".
//8.  Remove 2 elements from your new array starting at index 4 with one method.
//9.  Reverse your array.
//10. Turn the array into a string and return it.

// expected answer: 3,pepper,1,watermelon,orange,apple