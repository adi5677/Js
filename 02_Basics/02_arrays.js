const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[2][1]);

//cocat
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(marvel_heros);
// console.log(allHeros);


//spred => copia los elementos de un arreglo en otro arreglo
const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const new_array = [...another_array]
console.log(another_array);
const new_array_2 = another_array.flat(Infinity)
console.log(new_array_2);

console.log(Array.isArray("Aditya"));
console.log(Array.from("Aditya"));
console.log(Array.from({name: "Aditya"})); //Interesting

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); //interesting

//is => Object.is() determines whether two values are the same value. Two values are the same if one of the following holds:
//from => Array.from() creates a new, shallow-copied Array instance from an array-like or iterable object
//of =>  control flow statement used to iterate over a sequence of values
