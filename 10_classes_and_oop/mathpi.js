const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI); 

const coffee = {
    name: "Black coffee",
    price: 100,
    isAvailable: true,

    orderCoffee: function() {
        console.log(`Order is placed for ${this.name}`);
    }
}

// console.log(coffee);
console.log(Object.getOwnPropertyDescriptor(coffee, "name"));


Object.defineProperty(coffee, "name", {
    // writable: false,
    enumerable: false,
    // configurable: false
}) 

// console.log(Object.getOwnPropertyDescriptor(coffee, "name"));

for (const [key, value] of Object.entries(coffee)) {
    if(typeof value === 'function') {
        continue
    }

    console.log(`${key} : ${value}`);
    
}