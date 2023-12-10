// Immediately Invoked Function Expressions (IIFE)

(function coffee() { // This is called as Named IIFE 
    console.log(`DB Connected`);
})();

( (name) =>{
    console.log(`DB Connected 2 ${name}`);
} ) ("kshitij");

// ()() // format of IIFE 
// IIFE is also used to stop the pollution caused by gloabl variables 