// function addTwoNumbers (number1, number2){
//     console.log(number1+number2);
// }

function addTwoNumbers (number1, number2){
    // let result = number1+number2
    // return result
    return (number1+number2)
}

let result = addTwoNumbers(3, 66)
console.log(result);

function userloginMessage(username="San Kalra"){
    if (username===undefined){ //Same can be written as (!username) because JS considers undefined as false 
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in !`
}

console.log(userloginMessage())

function CalculateCartPrice(val1, val2, ...num1){ //here ... are the Rest operator which help us to take any number of parameters and return them into an array
    return num1
}

console.log(CalculateCartPrice(200, 300, 400, 500, 600, 700, 800));

const user = {
    username: "kshitij ",
    age : 20
}

function HandleObject(anyObject){
    console.log(`Username is ${anyObject.username} and their age is ${anyObject.age}` );
}