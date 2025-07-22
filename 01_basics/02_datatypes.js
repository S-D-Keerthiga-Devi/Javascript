"use strict"; // treat all js code as the newer version

// alert() -> for pop up in browser not in node js

console.log("hello"); console.log("abc")
// reduces readability

console.log(3 
    + 3
) // correct but not prefered, code readability should be high

// read ecma -> tc39, mdn for documentation

let name = "abc"
let age = 19
let isFalse = true
let state; //undefined

// number -> 2 ^ 53
// bigint
// string -> ""
// boolean -> true/false
// null -> stanalone value (empty)
// undefined (value not assigned)
// symbol -> identify uniqueness (used in react, figma)

// object

console.log(typeof "abc");
console.log(typeof age);
console.log(typeof null); // object
console.log(typeof undefined); // undefined