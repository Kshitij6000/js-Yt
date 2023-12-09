const myGames = ["Cricket","Football","Badminton"]
const myHobbies = ["Books","Cooking","Music"]

// myGames.push(myHobbies)
// console.log(myGames);

// //Push merges two arrays whereas Concat returns a new array only 
// const Allthings = myGames.concat(myHobbies)
// console.log(Allthings);
//... -> called the spread operator : same work as concat 
const all_new_things = [...myGames,...myHobbies]
console.log(all_new_things);

const bekar_array = [1, 2, 3 ,[4, 5, 6,[7, 8,[9]]]]
console.log(bekar_array.flat(Infinity));

console.log(Array.isArray("Kshitij"))
console.log(Array.from("Kshitij"));
console.log(Array.from({name:"Kshitij"})) // Interesting case : Returns an empty array as it is not specified to form array using key or the values 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))// returns a new array of elements 
