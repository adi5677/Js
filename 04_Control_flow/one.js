//if => if one conditon is true then only the code inside if block will be executed
//Exp 2
// const tempratue = 25;

// if(tempratue < 30) {
//     console.log("Greater then 30");
// }
// else {
//     console.log("less then 30");
// }

// exp 2
// if(2 === "2") {
//     console.log("executed");    
// }
// //output: executed
// else{
//     console.log("not executed");
// }
//output: not executed
/* Important 
=== => strict equality operator // this is basically check the tyoe and value both
== => loose equality operator // this is basically check the value only
*/

// <, >, <=, >=, ==, !=, ===, !==, &&, ||, !, ==.


// const score = 100;

// if(score > 100) {
//     const power = "fly"
//     console.log(`user power: ${power}`); 
// }
// console.log(`user power: ${power}`);


//shorthand notation
// const balance = 1000;
// if (balance > 1000) console.log("balance is greater then 1000"), console.log("balance is greater then 1000");

//else if example

// if(balance < 500) {
//     console.log("balance is less then 500");
// }
// else if(balance > 500) {
//     console.log("balance is greater then 500");
// }
// else if(balance == 1000) {
//     console.log("balance is equal to 1000");
// }
// else {
//     console.log("balance is not equal to 1000");
// }

// Real life example
const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2 == 3) {
    console.log("user can proceed with payment");
}

if(loggedInFromGoogle || loggedInFromEmail || true) {
    console.log("User Logged in");
}
