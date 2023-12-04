const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => num + 10)
// const newNums = myNums.map( (num) => {return num + 10})


// Chaining // 2 sye 3 methods direct use karna ko "Chaining" khata ha

const newNums = myNums.map( (num) => num * 10).map( (num) => num + 1).filter( (num) => num >= 40) // "Num" me "True or False" dono values return ho gi lakin "Filter" me sirf "True" values hi return ho gi

console.log(newNums);