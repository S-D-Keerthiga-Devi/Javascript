const score = 400
console.log(score);

const balance = new Number(400)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // precision value

const otherNumber = 123.789
console.log(otherNumber.toPrecision(3)); // 124

const hundred = 1000000
console.log(hundred.toLocaleString('en-IN'));


// +++++++++++++++++ Maths +++++++++++++++++++++++++
console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.5));
console.log(Math.ceil(4.9));
console.log(Math.floor(4.8));
console.log(Math.min(2, 4, 6));
console.log(Math.max(2, 4, 6));

console.log(Math.random());
console.log((Math.floor(Math.random()) * 10) + 1);

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
