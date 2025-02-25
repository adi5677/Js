/* For Loop
syntax

for (let i = 0; i < array.length; i++) {
    const element = array[i];
    
}

*/

//For loop example
//Print 1 to 10 counting

for(let i = 0; i <= 10; i++) {
    const element = i;
    if(element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element);

//Inner loop and outer loop prectice 
for(let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        // console.log(`inner loop value: ${j} and inner loop value: ${i}`);
        // console.log(i + '*' + j + '=' + i * j);
    }
}

//For Array
let myArr = ["batman", "flash", "superman", "green lantern"];
// console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    // console.log(element);
}

//break and continue
//break => stop the loop

for(let i = 0; i <= 55; i++) {
    if(i == 9) {
        // console.log("we are at 9");
        break
    }
    // console.log(`value of i is ${i}`);
}


//continue => skip the current iteration and move to the next one
for(let i = 0; i <= 15; i++) {
    if(i == 9) {
        // console.log("we are at 9");
        continue
    }
    // console.log(`value of i is ${i}`);
}