const score = 400;
console.log(score);

const balance = new Number(100);
console.log(balance);

console.log(balance.toString());
console.log(balance.toFixed(2));

const otherNum = 123.8967;
console.log(otherNum.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++++ Maths +++++++++++++++++++

console.log(Math.abs(-9));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.9));
console.log(Math.round(3.8));
console.log(Math.random()); // Always gives values between 0 and 1 
console.log((Math.random()*10)+1);
console.log(Math.floor((Math.random()*10)+ 1));

const min = 10
const max = 20

console.log(Math.floor(Math.random()*(max-min +1)+min))// Very important better to even remember 
