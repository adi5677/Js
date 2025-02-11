//Dates => Date is a object.
let myDate = new Date()
console.log(myDate.toString());
// Output: "Wed Mar 01 2023 00:00:00 GMT-050
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());
// Output: "3/1/2023"
console.log(myDate.toDateString());
// Output: "Wed Mar 01 2023"


let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate2 = new Date("2000-12-09")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-09-2000")
let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now());


let newDate = new Date()
console.log(newDate.getTime());
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);







