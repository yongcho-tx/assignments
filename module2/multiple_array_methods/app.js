
// 1. Returns a list of everyone older than 18, which is




// 2. sorted alphabetically by last name, and where
// 3. each name and age is embedded in a string that looks like an HTML <li> element.


var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]

const sortedOfAge = arr => arr.filter(name => name.age > 18)
    .sort((a, b) => a.lastName > b.lastName ? 1 : a.lastName < b.lastName ? -1 : 0)
    .map(obj => `<li>${obj.firstName} ${obj.lastName} is ${obj.age}</li>`)
console.log(sortedOfAge(peopleArray))

// Expected Output: 
// [ 
//     "<li>Kyle Mooney is 27</li>",
//     "<li>Sarah Palin is 47</li>",
//     "<li>Rick Sanchez is 78</li>",
//     "<li>Morty Smith is 29</li>",
//     "<li>Lev Tolstoy is 82</li>" 
// ]

// Extra Credit
// Create another array of one or more individuals and add it to the original array.
// Create a function that filters out all people who's last names end with "y" or "a" and save those people in another array.
// Remove the second individual from the array.
// Return the array in reverse order.