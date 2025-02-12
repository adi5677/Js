function sayMyName() {
    console.log("A");
    console.log("D");
    console.log("I");
    console.log("T");
    console.log("Y");
    console.log("A");
    
}
// sayMyName();

 //Add two numbers
 function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2);
    // let result = num1 + num2;
    // return result;
    // console.log("Aditya"); // This will not be executed because of return statement
    // return num1 + num2 
 }
 addTwoNumbers(5, 6)
 addTwoNumbers("5" + 6)
 addTwoNumbers(5 + "a")

const result = addTwoNumbers(9, 4)
console.log(result)

function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter your username");
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Aditya"))
// console.log(loginUserMessage())




function calculatecartPrice(val1, val2, ...num1) {
    return num1
}

console.log(calculatecartPrice(2, 5, 8, 9, 10, 12));
 
const user = {
    name: "Aditya",
    price: 199
}

function handleObject(anyobject) {
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
    
}
// handleObject(user)

handleObject({
    username: "Adi",
    price: 199
})

const myNewArray = [100, 200, 300, 400, 500]

function returnSecondValue(getArray) {
    return getArray[1]
}