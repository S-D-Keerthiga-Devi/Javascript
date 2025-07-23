const user = {
    username: "ava",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    // this refers current context
}

// user.welcomeMessage() // ava
// user.username = "sam"
// user.welcomeMessage() // sam

// console.log(this); // {} empty object
// in windows browser inspect console.log(this) -> window object

// function chai(){
//     let username = "ava"
//     // console.log(this); // function's global object
//     // console.log(this.username); // undefined
// }
// chai() 

// const chai = function(){
//     let username = "ava"
//     console.log(this.username); // undefined
// }
// chai()

// const chai = () =>{
//     let username = "ava"
//     console.log(this.username); // undefined
//     console.log(this); // {}
// }
// chai()

// arrow function
// explicit return
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// }
// console.log(addTwo(1,2));

// method 2 implicit return
// const addTwo = (num1, num2) => (num1 + num2)

// with objects
const addTwo = (num1, num2) => ({username: "ava"})

console.log(addTwo(1,2));
