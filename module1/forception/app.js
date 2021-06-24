const people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"];
let alphabet = "abcdefghijklmnopqrstuvwxyz";
alphabet = alphabet.toUpperCase();
let newArr = [];

function forception(people, alphabet) {
    for (let i = 0; i < people.length; i++) {
        newArr.push(`${people[i]}:`);
        for (let j = 0; j < alphabet.length; j++) {
            newArr.push(alphabet[j]);
        }
    }
    return newArr;
}
console.log(forception(people, alphabet));

// Expected Output: ["Jon:", "A", "B", "C", "D", "E", "F", "G", "H", "I", 
// "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V",
//  "W", "X", "Y", "Z", "Jacob:", "A", "B", "C", "D", "E", "F", "G",
//   "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", 
//   "U", "V", "W", "X", "Y", "Z", "Jingle:", "A", "B", "C", "D", "E",
//    "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
//    "S", "T", "U", "V", "W", "X", "Y", "Z", "Heimer:", "A", "B", "C", 
//    "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", 
//    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "Schmidt:", 
//    "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
//     "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]