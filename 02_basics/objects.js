//Singleton 
// Object.create
// Object Literals

const mySym = Symbol("key1")

const userJS = {
    name:"Kshitij",
    age:20,
    [mySym]:"myKey1",
    location:"Indore",
    email:"Kshitij@google.com",
    isLoggedin : false,
    lastLogindays : ["Monday","Tuesday","Friday"]
}

console.log(userJS.age)
console.log(userJS["email"])
// console.log(userJS["mySym"]);//isme galti ye hai ki abhi iska data type symbol nahi hai 
console.log(userJS[mySym]);

userJS.email = "Kshitij@amazon.com"
// Object.freeze(userJS)
userJS.email = "kshitij@honda.com"
console.log(userJS);
console.log(userJS.email);

userJS.greeting = function(){
    console.log("Hello JS user");
}
userJS.grettingTwo = function(){
    console.log(`Hello JS user ${this.name}`);
}
console.log(userJS.greeting());
console.log(userJS.grettingTwo());