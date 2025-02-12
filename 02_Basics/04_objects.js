//singleTon

// const tinderUser = new Object() //declare a new object single ton

const tinderUser = {} //Non single Ton

tinderUser.id = "5677Adi"
tinderUser.name = "Aditya"
tinderUser.age = 25
tinderUser.location = "Bangalore"
tinderUser.age.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "adi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Aditya",
            lastname: "Sharma"
        }
    }
}

// console.log(regularUser.fullname.userfullname); //accessing nested object

const obj1 = {1: "one", 2: "two", 3: "three"}
const obj2 = {4: "four", 5: "five", 6: "six"}
// const obj3 = {obj1, obj2}
// console.log(obj3); //error: cannot access object as a property
// const obj3 = Object.assign({}, obj1, obj2) //merging two objects

const obj3 = {...obj1, ...obj1}
// console.log(obj3);

const users = [
    {
        id: 1,
        name: "Aditya"
    },
    {
        id: 2,
        name: "Rahul"
    },
    {
        id: 3,
        name: "Rohan"
    },
]

users[1].id
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('location'));

const course = {
    name: "javascript",
    duration: "30 days",
    price: "5000",
    courseInstructor: "Hitesh Choudhary"
}

// course.courseInstructor

const {courseInstructor: instructor} = course    // destructuring
console.log(instructor);


//React Example destructuring
// const navbar = ({company}) => {

// }

// navbar(company = "Aditya");

//Api
// {
//     "name": "Aditya",
//     "age": "25",
//     "address": "Noida"
// }

[
    {},
    {},
    {}
]