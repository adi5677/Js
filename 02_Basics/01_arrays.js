// Array

const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = [1, 2, 3, 4, 5]
const myHerros = ["shaktiman", "Gangadhar"]

console.log(myArr[1]);


//Array methods

//using push and pop methods
//push => add element at the end of array
//pop => remove element from the end of array
//unshift => add element at the beginning of array
//shift => remove element from the beginning of array
//index of => find the index of the element in the array
//includes => check if the element is present in the array or not
//join => convert array into string
//concat => merge two arrays into one
//slice => extract a part of array
//splice => add or remove elements from array
//forEach => iterate over array
//map => create a new array with the results of applying a provided function on every element in this
//filter => create a new array with all elements that pass the test implemented by the provided function
//reduce => apply a function against an accumulator and each element in the array (from left to right
//reduceRight => apply a function against an accumulator and each element in the array (from right to
//some => is at least one element in the array satisfies the provided testing function
//every => is every element in the array satisfies the provided testing function
//find => find first element in the array that satisfies the provided testing function
//findIndex => find first index of the element in the array that satisfies the provided testing function


// myArr.unshift(10)
// myArr.shift()
// myArr.push(6)
// myArr.push(7)
// myArr.pop()
console.log(myArr);
// [0, 1, 2, 3, 4, 5,]
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));


// const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// 012345
// console.log(myArr);

// slice ,  splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 4);

console.log(myn1);
// 1,2,3
console.log("B", myArr);


const myn2 = myArr.splice(1, 5);
console.log("c", myArr);
console.log(myn2);








