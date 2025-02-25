//for each loop

const coding = ["c", "c++", "python", "ruby", "cpp", "java"]

// coding.forEach( function (val) {
//     console.log(val);
// }  )

// coding.forEach ( (item) => {
//     console.log(item);
// } )

// function printMe(item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach( (item, index, array) => {
//     console.log(item, index, array);
// } )

const myCoding = [
    { langName: "c", year: 1972 },
    { langName: "c++", year: 1983 }
]

myCoding.forEach( (item) => {
    console.log(item.langName);
})