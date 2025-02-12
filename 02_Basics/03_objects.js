//Singletom 

//objects literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Aditya",
    "full name": "Aditya Sharma",
    [mySym]: "value1",
    age: 22,
    location: "India",
    email: "adis6469@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]); 
console.log(JsUser["full name"]); //using string as key // for acessing dynamic key in square baracket
// console.log(JsUser[mySym]);

JsUser.email = "golu6469@gmail.com"; //update value of email
// Object.freeze(JsUser)
JsUser.email = "prince6469@gmail.com"; //update value of email // this will not work as email
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Team");
}

JsUser.greetingTwo = function() {
    console.log(`Hello Team, ${this.location}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



