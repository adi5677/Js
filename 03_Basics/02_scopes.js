//Global Scopes
// var c = 300
let a = 500


//Block Scopes => function, if, for, while, switch, try, catch, finally
if(true) {
    let a = 10; 
    const b = 20;
    // var c = 30;
    // console.log("INNER: ", a);
    
}


//For
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }

// console.log(i); // ReferenceError: i is not defined



// console.log(a);
// console.log(b);
// console.log(c);


//++++++++++++++++++++++ Nested Scopes +++++++++++++++++++++++

function one() {
    const username = "Aditya"

    function two() {
        const password = "1234"
        console.log(username);
        
    }
    // console.log(password);
    // ReferenceError: password is not defined

    // two()

    
}

// one()

if(true) {
    const username = "Aditya"
    if(username === "Aditya") {
        const password = "1234"
        // console.log(username + password);
    }
    // console.log(password);
    // ReferenceError: password is not defined
}

// console.log(username);
// ReferenceError: username is not defined



//+++++++++++++++++++++ Interesting Scopes +++++++++++++++++++++


function addone(num) {
    return num + 1
}
addone(5)

// console.log(addone()); // Nan
// console.log(addTwo(5)); // ReferenceError: addTwo is not defined

const addTwo = function(num) {
    return num + 2
}

console.log(addTwo(5));