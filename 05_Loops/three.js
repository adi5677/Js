//for of 

// ["", "", ""]
// {}, {}, {}

// for of
const arr = [1, 2, 3, 4, 5]

for (const val of arr) {
    // console.log(val);
}

const greetings = "Aditya"
for (const char of greetings) {
    // console.log(char);
}

//Maps => this is a key value pair

const map = new Map()
map.set('IN ', 'India')
map.set('US', 'United States')
map.set('UK', 'United Kingdom')
map.set('AU', 'Australia')
map.set('CA', 'Canada')
// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
    
}


const myObject = {
    name : 'Aditya',
    game : 'Cricket'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }

