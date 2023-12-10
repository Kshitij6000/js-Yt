let a = 300

if (true){
    let a = 10 
    const b = 20
    var c = 30//  The keyword var allows the values to go out of their definfed scope that is why Var is not used 
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "Kshitij"
    function two() {
        const website = "Twitter"
        console.log(username);
    }
    two()
}
one()

addOne(5)// Can be executed like this ; it will give no error 
function addOne(num){
    return num + 1 
}

addTwo(7) // This cannot be done because of concept of Hoisting 
const addTwo = function(num){ // here addtwo is sometimes called an expression 
    return num + 2
}
