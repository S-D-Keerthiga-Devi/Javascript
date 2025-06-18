// primitive

// 7 types: String, Number, Boolean, BigInt, Symbol, Null, Undefined


const num = 100 // dynamically types -> declared at runtime
const scoreValue = 100.3
let email;
const temp = null
const isLoggedIn = false

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);

const bigNumber = 345678912345678912345n

// reference / Non primitive

// Array, Objects, Functions
const names = ['ava', 'bridget', 'stella', 'jules']
const myObj = {
    name: "ava",
    age: 20,
}

const myFunction = function()  {
    console.log("hello world");
}

console.log(typeof temp); // object
console.log(typeof myFunction); // function
console.log(typeof names) // object