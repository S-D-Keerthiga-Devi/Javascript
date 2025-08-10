const user = {
    username: "keerthiga",
    loginCount: 8,
    signnedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        // console.log(this);
    }
}
// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }

    // return this implicitly defined not required to write
}

// const userOne = User("ava", 12, true)
// const userTwo = User("alex", 11, false)
// console.log(userOne); // it prints userTwo as it is overriden

const userTwo = new User("alex", 11, false)
// console.log(userTwo);
console.log(userTwo.constructor);