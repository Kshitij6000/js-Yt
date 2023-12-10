const user ={
    username : "Hitesh",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username} welcome to the website `);
    }
}

// user.welcomeMessage()
// user.username = "Kshitij"
// user.welcomeMessage()

//console.log(this);// Here it shows an empty object but in Inspect it shows Window which is the Global object in the browser 

// function mithai(){
//     let username = "Kshitij "
//     console.log(this.username);
// }

// mithai()

// const mithai = function(){
//     let username = "Kshitij"
//     console.log(this.username);
// }

const mithai = () => { // Arrow Function 
    let username = "Kshitij"
    console.log(this);
}

mithai()

// const addthree = (num1, num2, num3) => {
//     return num1+ num2+ num3
// }
const addthree = (num1, num2, num3 ) => (num1 + num2 + num3) // called as Implicit Return 
console.log(addthree(23, 34, 45));

const aisehi = () => ({username:"kshitij"})
console.log(aisehi());