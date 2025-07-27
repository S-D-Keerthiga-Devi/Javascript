// forIn loop

// const myObj = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: "swift by apple"
// }

// for (const key in myObj) {
//     console.log(`${key} shprtcut is for ${myObj[key]}`);
// }

// const programming = ['js', 'python', 'cpp', 'java']

// for (const key in programming) {
//     console.log(`${key} : ${programming[key]}`); 
// }

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('FR', "France")
map.set('IN', "India")

for (const key in map) {
    console.log(key); // nothing as not iterable
}