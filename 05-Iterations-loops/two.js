// while loop

let index = 0
// while (index <= 10) { // while me sirf condition hi check karta ha
//     console.log(`Value of index is: ${index}`);
//     index = index + 2
// }


let myArray = ["Superman", "Thor", "Flash"]
let arr = 0

while (arr < myArray.length) {
    // console.log(`Value is: ${myArray[arr]}`);
    arr = arr + 1
}



// dowhile loop

let score = 1
// let score = 11 // 11 let karna per sirf "11 print" ho ga kue kye condition me 10 ha

do { // Pehla ap ka kaam ho ga phir last me condition check ho gi 
    console.log(`Score is: ${score}`);
    score++
} while (score <= 10);