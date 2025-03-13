// let myName = "Aditya"

// // console.log(myName.length);
// console.log(myName.trueLength);

let myHero = ["salmankhan", "spiderman"]

let heroPower ={
    name: "salmankhan",
    power: "Aishwarya",

    getSpiderPower: function() {
        console.log(`spidy power is ${this.power}`);
        
    }
}

Object.prototype.aditya = function(){
    console.log("Aditya is presemt in all objects");
    
}


Array.prototype.heyAditya = function(){
    console.log("Aditya says hello");
}

// heroPower.aditya();

// myHero.aditya();
// myHero.heyAditya();
// heroPower.heyAditya();

// Inhritance in JS

const user = {
    name: 'Kim',
    email: 'adis6469@gmail.com',
    active: true,
    cart: [],
    purchases: []
}

const Teacher = {
    maleVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

//Modern syntax
Object.setPrototypeOf(TeachingSupport, user)



let anotherUser = "CodeWithAditya"

String.prototype.trueLenth = function(){
    console.log(`The true length of ${this} is ${this.length}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUser.trueLenth();
"Aditya".trueLenth();
"Golu".trueLenth();

