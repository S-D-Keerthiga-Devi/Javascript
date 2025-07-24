// if statement

// const isUserLoggedIn = true
// const temperature = 41

// if(2 === "2"){
//     console.log("executed"); // not executed
// }

// === -> checks data type too

// if(temperature < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }
// console.log("execute");

// const score = 200
// if(score > 100){
//     const power = "fly" // local scope
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`); not executed
// if var power = "fly" then executed as it has global scope

// short hand notation
// const balance = 1000
// if(balance > 500) console.log("test"), console.log("test2");
// implicit scope

// const balance = 1000
// if(balance < 500){
//     console.log("less than 500");
// }
// else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }
// else{
//     console.log("less than 1200");
// }

const userLogged = true
const debitCard = true
const loggedInFromGoogle = false
const LoggedInFromEmail = true

if(userLogged && debitCard && 2==3){
    console.log("allow to buy course");
}

if(loggedInFromGoogle || LoggedInFromEmail){
    console.log("user logged in");
}