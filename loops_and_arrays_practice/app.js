// 1. Loop through the following array and count how many "computers" there are. Log the final count:

const officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"];

count = 0;
for (let i = 0; i < officeItems.length; i++) {
    
    if(officeItems[i] == 'computer') {
        count++
    }
}

console.log(count)


// 2. Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" if thy aren't 18.

const peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (let i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++) {
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18) {
          console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough to see Mad Max.`)
      } 
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18) {
          console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max.`)
      } 
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'male') {
          console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough. HE'S good to see Mad Max Fury Road`)
      }
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'female') {
          console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is old enough. SHE'S good to see Mad Max Fury Road`)
      }
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'male') {
          console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max Fury Road, don't let HIM in`)
      }
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age < 18 && peopleWhoWantToSeeMadMaxFuryRoad[i].gender == 'female') {
          console.log(`${peopleWhoWantToSeeMadMaxFuryRoad[i].name} is not old enough to see Mad Max Fury Road, don't let HER in`)
      }
  }

//Optional bonus challenge

const arr = [9, 3, 4, 2];

function lightStatus(arr) {
    return arr.reduce((a, b) => a + b) % 2 === 1 ? 'The light is on' : 'The light is off';
}

console.log(lightStatus(arr))