// Immediately invoked function expressions (IIFE)

// function chai(){
//     console.log(`DB connected`);
// }
// chai()

// named IIFE
// (function chai(){
//     console.log(`DB connected`);
// })(); // always end with ; otherwise gives error

// 1. () -> definition, 2. () -> execution like chai()
// reduce global scope pollution

// unnamed IIFE with parameters
((name) =>{
    console.log(`DB connected ${name}`);
})('ava'); // without ; gives error
