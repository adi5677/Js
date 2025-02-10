const score = 500
// console.log(score);


const balance = new Number(250)
// console.log(balance); 

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //this is provide fixed 2 decimal numbers

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); //define the number of decimal places to show

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //for Indian locale


//+++++++++++++++++++++++ Maths ++++++++++++++++++++++++++

console.log(Math);
// console.log(Math.abs(-4)); //absolute value => Convert negative to positive
// console.log(Math.round(4.6)); //round to nearest integer
//If we want to chhose upper value in round off
// console.log(Math.ceil(4.2));

//If we want to choose lower value in round off
// console.log(Math.floor(5.8));

//Find lowest value in math
// console.log(Math.min(2,4,8,9));

//Find highest value in math
// console.log(Math.max(2,4,8,9));

console.log(Math.random());
console.log((Math.random()*10) + 1);

const min = 10
const max = 50

console.log(Math.floor(Math.random() * (max - min + 1)) + min); //generate random number between 10 to

