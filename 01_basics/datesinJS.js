//Dates 

let mydate = new Date()
console.log(mydate);
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString());
console.log(mydate.toJSON());
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

//let mycreatedDate = new Date(2023, 10, 89)
let mycreatedDate = new Date("01-09-2003")
console.log(mycreatedDate.toDateString());
//let myanotherDate = new Date(2024, 7, 16, 12, 0)
//console.log(myanotherDate.toLocaleString());

let myTimestamp = Date.now()

console.log(myTimestamp);
console.log(mycreatedDate.getTime());

let newDate = new Date()
newDate.toLocaleString('default',{
    weekday:"long",
})