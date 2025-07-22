const accountId = 144553 // can't change
var accountEmail = "abc@google.com" // without scope
let accountPassword = "12345" // with scope
accountCity = "Jaipur"
let accountState; // Output undefined

// accountId = 2 not allowed
console.log(accountId);

accountEmail = "abc.com"
accountPassword = "212121"
accountCity = "Delhi"

/*
Don't use var beacuse of functional scope and block scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])