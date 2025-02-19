const userEmail = "adis6469@gmail.com"

// if(userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("No user email");
// }

//Truthy value
//true
//1
//"0", 'false', " " 
//“hello”
//“world”
//[]
//{}
//function(){}, 


//Falsy value
//null
//undefined
//0, -0, 0.0
//"" (empty string)
//NaN (Not a Number)
//false
//BigInt (0)n



// if(userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

//Nullish Coalescing Operator (??): Null, undefined, 0, "", NaN, false, null, undefined

let val1;
val1 = 5 ?? 10
console.log(val1) // 5


val1 = null ?? 10 ?? 50
console.log(val1) // 10

//Ternary operator
//Syntax
// condition ? value_if_true : value_if_false

//Example
const iceTeaPrice = 100
iceTeaPrice >= 100 ? console.log("Price is high") : console.log("Price is low") // Price is high
