
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

// function calculateCartPrice(num1){
//     return num1
// }

// console.log(calculateCartPrice(2));

// function calculateCartPrice(...num1){ // REST operator
//         return num1
// }

// console.log(calculateCartPrice(200, 400, 600));

function calculateCartPrice(val1, val2, ...num1){ // REST operator
    return num1
}

console.log(calculateCartPrice(200, 400, 600, 800)); // [600, 800]

const user = {
    username: "ava",
    price: 199
}

function handleObject(anyObject){
    console.log(`Username is ${user.username} and price is ${user.price}`);

}

handleObject(user)

// if user.prices -> price is undefined

handleObject({
    username: "sam",
    price: 200
})

const myNewArray = [200, 400, 600, 800]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1, 2, 3, 4, 5]));