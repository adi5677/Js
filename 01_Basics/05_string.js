const name = "Aditya"
const lname = "Sharma"

// console.log(name + lname + "value");

console.log(`Hello My Name is ${"Aditya"} and my surname is ${"Sharma"}`);

const gameName = new String('Aditya-sh')
// console.log(gameName);
// console.log(gameName[2]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(4));
// console.log(gameName.charCodeAt(4));
// console.log(gameName.concat("Sharma"));
console.log(gameName.indexOf('y'));


const newString = gameName.substring(1, 4)
console.log(newString);

const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "  Aditya  "
console.log(newStringOne.trim());

const url = "https://www.google.aditya%20sharma"
console.log(url.replace('aditya%20sharma', 'com'));
console.log(url.includes('google'));
console.log(url.includes('adi25'));
console.log(gameName.split('-'));
