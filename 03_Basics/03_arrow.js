const user = {
    username: "Aditya",
    price: 599,

    welcomeMassage: function() {
        console.log(`${this.username}, welcome to our store!`);
        console.log(this);
    }

}

// user.welcomeMassage()
// user.username = "Golu"
// user.welcomeMassage()

// console.log(this);



// function chai() {
//     console.log(this);
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "Golu";
//     console.log(this.username);
// }


const chai = () => {
    let username = "Golu";
    console.log(this.username);
}

// chai()


const addTwo = (num1, num2) =>  (num1 + num2)

console.log(addTwo(3, 4));

// const myArray = [2, 5, 3, 7, 9];
// myArray.array.forEach(() => ())