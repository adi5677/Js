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





//++++++++++++++++++++++++ Stack & Heap  ++++++++++++++++++++++++++++++++++++
//Stack => LIFO (Last In First Out) => Memory allocated on Stack is faster than Heap
//Stack (primitive)

//Heap => Memory allocated on Heap is slower than Stack => LIFO (Last In First Out) => FIFO (First In First Out)
//Heap (Non-primitive)

let myFname = "Aditya";

let anotherName = "Prince"
anotherName = myFname;
console.log(myFname);
console.log(anotherName);

let userOne = {
    name : "Aditya",
    email : "aditya@gmail.com"
}

let userTwo = userOne;

userTwo.email = "golu@gmail.com"
console.log(userOne);
console.log(userOne.email);
console.log(userTwo.email);






