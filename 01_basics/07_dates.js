// dates

let myDate = new Date()
console.log(myDate); // 2025-07-09T05:57:07.481Z
console.log(myDate.toString()); // Wed Jul 09 2025 05:57:07 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toJSON()); // 2025-07-09T05:57:07.481Z
console.log(myDate.toLocaleDateString()); // 7/9/2025
console.log(myDate.toLocaleTimeString()); // 5:57:07 AM
console.log(myDate.toLocaleString()); // 7/9/2025, 5:57:07 AM
console.log(typeof(myDate));

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString());

let myTime = Date.now() // in milliseconds
console.log(myTime);
console.log(myCreatedDate3.getTime());

console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date()
console.log(newDate.getMonth() + 1); // does to get exact month
console.log(newDate.getDay());

newDate.toLocaleString( 'default', { // object
    weekday: "long"
})