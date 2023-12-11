const isuserLoggedin = true

if (2==="2"){
    console.log("Executed!");
}
else{
    console.log("Problem :(");
}

const balance = 100000000
if (balance>10000) console.log("You are good to go!");// Short hand notation 

const remaining_peices = 5
if (remaining_peices<2){
    console.log("Please share them");
} else if (remaining_peices>4 && remaining_peices<8){
    console.log("You can have them!");
}else{
    console.log("Haa bhai! ");
}

// Nullish Coalescing Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10 
val1 = null ?? 10 

console.log(val1);

// Terniary Operator 
// condition ? true : false 

