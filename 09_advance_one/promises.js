//Promises

const promiseOne = new Promise(function(resolve, reject){
    //Do async task 
    //DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task completed');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log('Promise consumed')
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }
    , 1000)
}).then(function(){
    console.log('Promise 2 consumed');
})

const promiseThree = new Promise(function(resolve, reject){
    console.log(resolve);
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(resolve, reject){
        let error = true 
        if(!error) {
            resolve({username: "Aditya", password: "5677"})
        } else {
            reject('Error in promise')
        }
    }, 1000)
})

const username = promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log('Finally block'))

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true 
        if(!error) {
            resolve({username: "Golu", password: "5677"})
        } else {
            reject('Golu Error in promise')
        }
    }, 1000)
})


async function consumePromiseFive() {
    try {
        
    const response = await promiseFive
    console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E:", error);
//     }
// }

// getAllUsers()

// fetch('https://jsonplaceholder.typicode.com/users')
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error))


fetch('https://api.github.com/users/adi5677')
.then(response => {
    return response.json()
})

.then(data => {
    console.log(data);
})

.catch(error => console.log(error));
