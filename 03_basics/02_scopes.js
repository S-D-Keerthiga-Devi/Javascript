// var c = 300 // var is avoided scope is not defined

if(true){
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a); // error
// console.log(b); // error
// console.log(c); // 30

let a = 100
if(true){
    let a = 10
    const b = 20
    // console.log("inner:", a);
}
// console.log(a);

function one(){
    const username = "ava"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // error
    two()
}
// one()

if(true) {
    const username = "ava"
    if(username === "ava"){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website); // error
}
// console.log(username); // error

// ++++++++++++++++++++ interesting +++++++++++++++++++++++

console.log(addone(5)); // 6
function addone(num){
    return num + 1
}

// addTwo(5) // error
const addTwo = function(num){ // variable or expression
    return num + 2
}
