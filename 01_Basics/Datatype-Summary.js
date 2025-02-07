//Datatypes => Primitive Datatypes & Non-Primitive Datatypes

//Primitive Datatypes
// 7 Types :- string, Boolean, Number, undefined, Null, Symbol, BigInt

//Examples:-
let score = 100
let age = 24
let isStudent = true
let mobNum = 8084321585
let outSideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
const bigNumber = 98764532010n

console.log(id === anotherId);


//Refernce (Non-primitive) Datatypes 
// 6Types :- Array, Object, Function, Map, Set, Date

//Examples:-
//Array
let myName =["Aditya", "Golu"]

//Object
let myObj = {
    name : "Aditya",
    age : 24
}

//Functions
const myFunction = function() {
    console.log("Hello Aditya");   
}

console.log(myName);


