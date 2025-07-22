// singleton

// object literals

const mySym = Symbol("key1")

const JSuser = {
    name: "ava",
    age: 21,
    "full name": "ava chen",
    [mySym]: "mykey1", // syntax for symbol
    location: "India",
    email: "ava@email.com",
    isLoggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser['full name']);
// console.log(JSuser[mySym]); // access symbol

JSuser.email = "avachen@email.com"
// Object.freeze(JSuser)
JSuser.email = "avachen@google.com"
// console.log(JSuser);

JSuser.greeting = function() {
    console.log("hello world");
    
}

JSuser.greetingTwo = function() {
    console.log(`hello user, ${this.name}`);
    
}


// console.log(JSuser.greeting); // output: undefined only function reference
console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());