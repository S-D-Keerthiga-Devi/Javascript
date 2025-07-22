const name = "ava"
const repoCount = 50

// console.log(name + repoCount + " Value");
console.log(`my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("bridget-von-asherberg")
console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));

const newStr = gameName.substring(0, 4)
console.log(newStr);

const anotherStr = gameName.slice(-7, 4) // takes length 7 - given 7 = brid
console.log(anotherStr);

const newStr1 = "       ava       "
console.log(newStr1);
console.log(newStr1.trim());


const url = "https://google.com%20-github.com"
console.log(url.replace("%20", "//"));
console.log(url.includes("google")); // true or false
console.log(gameName.split('-'));

