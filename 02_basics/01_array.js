const myArr = [1, 2, 3, 4, 5]

const myArr2 = ["ava", "bridget", "jules", "stella"]

const myArr3 = new Array(1, 2, 3, 4)

// console.log(myArr[1]);


// Array methods
myArr.push(6)
myArr.pop()
myArr.unshift(9)
// console.log(myArr);
myArr.shift() // similar to pop removes from start
// console.log(myArr);

// console.log(myArr.includes(9)); // type: boolean
// console.log(myArr.indexOf(3)); // if not present then output -1

const newArr = myArr.join()
// console.log(newArr); // type: string


console.log("A ", myArr);
const newAr = myArr.slice(1, 3)
console.log(newAr);
console.log("B ", myArr);

const newAr1 = myArr.splice(1, 3) // removes all the given range elemnets from original array
console.log("C ", myArr); // 1, 5
console.log(newAr1); // 2, 3, 4