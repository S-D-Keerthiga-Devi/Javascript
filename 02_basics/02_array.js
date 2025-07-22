const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
console.log(marvel_heros);

const altHeros = marvel_heros.concat(dc_heros) 
console.log(altHeros);

const allNewHeros = [...marvel_heros, ...dc_heros] // spread operator any number of params can be added
console.log(allNewHeros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const real_another_array = another_array.flat(Infinity) // removes subarrays
console.log(real_another_array);

console.log(Array.isArray("ava")); // false
console.log(Array.from("ava"));
console.log(Array.from({name: "ava"})); // []

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));
