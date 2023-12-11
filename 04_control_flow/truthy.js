//Truthy and Falsy Values 

const userEmail = "Kshitij@google.com"

if (userEmail){
    console.log("Got user Email");
}else{
    console.log("No value recieved!");
}

// Falsy Values : false, 0, -0, BigInt 0n , "" , null , undefined, NaN 

// Truthy values : "0", 'false', " " , [] ,{}, function(){}

const emptyObj = {}

if (Object.keys(emptyObj).length()===0){
    console.log("empty object detected!");
}