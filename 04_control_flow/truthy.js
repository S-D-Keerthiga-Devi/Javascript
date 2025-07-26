// const userEmail = "user@ai"
// if userEmial = [] -> true
// userEmail = "" -> false

// if(userEmail){
//     console.log("got user email");
// }
// else{
//     console.log("don't have user email");
// }

// falsy value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", 'false', " ", [], {}, function(){} -> empty function

// const userEmail = []
// if(userEmail.length === 0){
//     console.log("array is empty");
// }

// const emptyObj = {}

// if(Object.keys(emptyObj).length === 0){
//     console.log("object is empty");
// }

// console
// false = 0 -> true
// false == '' -> true
// 0 == '' -> true

// Nullish Coalescing operator (??): null undefined

// let val1;
// val1 = 5 ?? 10 -> 5
// val1 = null ?? 10 -> 10
// val1 = undefined ?? 15 -> 15
// val1 = null ?? 10 ?? 15 -> 10

// console.log(val1);

// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");