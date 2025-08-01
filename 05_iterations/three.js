// for of

// ["", "", ""] array
// [{}, {}, {}] array of objects

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello World"
// for (const greet of greetings) {
//     console.log(`each char is ${greet}`);
// }

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India") // duplicates not added
// console.log(map);

// for (const key of map) {
//     console.log(key);
// }
// [ 'IN', 'India' ]
// [ 'USA', 'United States of America' ]
// [ 'FR', 'France' ]

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
// }

const myObj = {
    'game1': 'NFS',
    'game2' : 'Spiderman'
}

// for (const [key, value] of myObj) {
//     // console.log(key, ':-', value); -> error in case of object
// }