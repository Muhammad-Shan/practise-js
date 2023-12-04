// const coding = ["js", "ruby", "python", "cpp"]

// const values = coding.forEach( (item) => { // store in variable
//     console.log(item);
//     return item
// } )

// console.log(values); // forEach koi bhi value return nhi karta ha



// filter operation
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4) // Filter bhi call back function hii lyta ha // Filter me condition dani parti ha "num > 4" //Filter ap ko values returb karta ha


// const newNums = myNums.filter( (num) => { // Other method to write "Filter"
//     return num > 4 // Agar "Filter" ko "scope" me call karye gye to "return" likhana para ga
// })


// const newNums = [] // use forEach Method to "print newNums string"
//     myNums.forEach( (num) => {
//         if (num > 4) {
//             newNums.push(num)
//         }
//     } )
// console.log(newNums);


// "Other Example of filter"
const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
    {title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
    {title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
    {title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
    {title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
    {title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
    {title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
    {title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989}
]

// let userBooks = books.filter( (bk) => bk.genre === 'History')

// userBooks = books.filter( (bk) => { return bk.publish >= 1995 && bk.genre === "History"}) // Rewrite "user books" // yeah "scope {}" hatao yeah "return keyword" use karo

userBooks = books.filter( (bk) => { return bk.edition <= 2000 && bk.genre === "Non-Fiction"})

console.log(userBooks);