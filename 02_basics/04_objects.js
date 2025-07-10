// const tinderUser = Object() // singleton object
const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false

//console.log(tinderUser); // both same output : {}

const regularUser = {
    email: "some@email.com",
    fullname: {
        userfullname: {
            firstname: "ava",
            lastname: "chen"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = {obj1, obj2} // nested object
// const obj3 = Object.assign({}, obj1, obj2) // single object {} wriiten optional result same without it
// all the obj1 obj2 are placed in {} else it would have merged in obj1

// latest one
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "user1@email.com"
    },
    {
        id: 2,
        email: "user2@email.com"
    },
    {
        id: 3,
        email: "user3@email.com"
    }
]

// console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser)); // array
console.log(Object.values(tinderUser)); // array
console.log(Object.entries(tinderUser)); // same as items in dict in python

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
