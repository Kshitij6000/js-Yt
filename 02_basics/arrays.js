//Arrrays

const myArr = [0, 1, 2, 3, 4, 5]
const myFav = ["Kaju Katli","Barfi","Rasmalai"]

const newArr = new Array(1,2,3,4)
console.log(myArr);

// Array Methods 
//Push , Pop 
// indexOf , includes 
myArr.unshift(9)// Adds element to the start of the array 
myArr.shift()// removes element from the start of the array 
console.log(myArr);

const newArr2 = myArr.join()
// console.log(typeof newArr2);

// Slice , Splice 

console.log("A ", myArr);

const myN1 = myArr.slice(1,3)
console.log(myN1);
console.log("B ", myArr);

const myN2 = myArr.splice(1,3)
console.log(myN2);
console.log("C ",myArr);