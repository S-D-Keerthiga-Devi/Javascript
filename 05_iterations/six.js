// const coding = ["js", "python", "java", "ruby", "cpp"]

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// })

// console.log(values); // undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// const newNums = myNums.filter( (num) => {
//    return num > 4
// }) // if scope is there then return should be written

// for each method
// const newNums = []
// myNums.forEach( (num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Fiction', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Science', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'Fiction', publish: 2010, edition: 1996},
    {title: 'Book Eight', genre: 'History', publish: 1986, edition: 2004},
]

// const userBooks = books.filter( (bk)=> bk.genre === "History") 

let userBooks = books.filter( (bk)=> {
    return bk.publish >= 1995 && bk.genre === "History"
})
console.log((userBooks));