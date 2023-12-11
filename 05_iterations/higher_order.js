// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);
//Map is not iteratable using for in loop
for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// For Each loop 

const coding = ["Java","Python","C++","Ruby","Javascript"]

coding.forEach( function (item) {
    console.log(item);
})

coding.forEach( (item,index, arr )=> {
    console.log(item , index, arr);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

const myCoding = [
    {
        languageName : "Javascript",
        languageFile : "js"
    },
    {
        languageName : "Java",
        languageFile : "java"
    },
    {
        languageName : "Pyhton",
        languageFile :"py"
    }
]

myCoding.forEach( (item)=> {
    console.log(item.languageName);
})