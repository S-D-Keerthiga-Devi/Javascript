let score = "33"

// console.log(typeof score);
// console.log(typeof(score)); // as a method

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

let score2 = "33abc"
let valueInNumber2 = Number(score2)
// console.log(typeof valueInNumber2);
// console.log(valueInNumber2); // NaN -> not a number

let score3 = null
let valueInNumber3 = Number(score3)
// console.log(typeof valueInNumber3);
// console.log(valueInNumber3); // output: 0

let score5 = undefined
let valueInNumber5 = Number(score5)
// console.log(typeof valueInNumber5);
// console.log(valueInNumber5); // output: NaN

let score4 = true
let valueInNumber4 = Number(score4)
// console.log(typeof valueInNumber4);
// console.log(valueInNumber4); // output: 1

// "33" -> 33
// "33abc" -> NaN
// null -> 0
// undefined -> NaN
// true -> 1, false -> 0

let isLogged = 1
let booleanIsLogged = Boolean(isLogged)
// console.log(booleanIsLogged); //true

let isLogged2 = ""
let booleanIsLogged2 = Boolean(isLogged2)
// console.log(booleanIsLogged2); // false

let isLogged3 = "abc"
// let booleanIsLogged3 = Boolean(isLogged3)
// console.log(booleanIsLogged3); // true

// 1 -> true, 0 -> false
// "" -> false
// "abc" -> true

let someNumber = 33
let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// **************** Operations ********************

let value = 3
let negValue = -value
// console.log(negValue);

// +, -, *, /, %, ** -> basic operations

str1 = "hello"
str2 = " world"
str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2); // 12
// console.log(1 + "2"); // 12
// console.log("1" + 2 + 2); // 122
// console.log(1 + 2 + "2"); // 32
// console.log(+true); // 1 , true+ -> error
// console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter);
