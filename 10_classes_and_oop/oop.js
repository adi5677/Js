const user = {
    username: "Aditya",
    loginCount: 32,
    facebookSignedIn: true,

    getUserDetails: function() {
        // console.log("Got the user details from the database");
        console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
        console.log(this);
        
    }
}



// console.log(user.username);
// console.log(user['loginCount']);
// console.log(user.getUserDetails());
// console.log(this);

function User(username, loginCount, facebookSignedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.facebookSignedIn = facebookSignedIn;
    
    this.getUserDetails = function() {
        // console.log("Got the user details from the database");
        console.log(`Username is ${this.username}, user has logged in ${this.loginCount} times`);
        console.log(this);

    }
    return this;
}

const aditya = new User("Aditya", 32, true);
console.log(aditya);
// console.log(aditya.getUserDetails());
const golu = new User("Golu", 2, false);
console.log(golu);