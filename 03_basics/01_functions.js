
function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

// sayMyName()

// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
    
// }
// addTwoNumbers(2,null)
// addTwoNumbers(2,'a')

function addTwoNumbers(num1, num2){
    // let res = num1 + num2
    // // console.log("hello");
    // return res  
    
    return num1 + num2
}

const res = addTwoNumbers(2,5)
// console.log(res);

function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("please enter username");
    //     return
    // }
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("please enter username");
    //     return
    // }
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}


// console.log(loginUserMessage("ava"));
console.log(loginUserMessage()); // undefined