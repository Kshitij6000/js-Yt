//const tinderUser = {}// Non-Singleton object 

const tinderUser = new Object()//Singleton object 

tinderUser.id ="123abc"
tinderUser.name = "Cutu"
tinderUser.age = 23
console.log(tinderUser);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"c", 4:"d"}
// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2)
const obj3 = {...obj1 , ...obj2}
console.log(obj3);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));// Datatype of output is Array 
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("age"));

const course ={
    courseName : "How to code",
    courseLength : "3days",
    courseCost : "999"
}

const {courseName: sexy} = course
console.log(sexy);