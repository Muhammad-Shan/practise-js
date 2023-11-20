// Jo bhi ap nye code likha ha 10,20 lines ka usye 1 package me band kar dye ha // us package ko ap jitni bar marzi us ki copies ap jaha marzi lye kar ja sakta ha


function myname() {
    console.log("H");
    console.log("S"); // function me data ko function defination khata ha 
    console.log("I");
    console.log("L");
    console.log("U");
}

// myname // This is reference
// myname() // () maens execute an function


// function addTwoNumbers (num1, num2) { // In () brackets ko "parameters" khata ha
//     console.log(num1 + num2);
// }


// Other method to write function
function addTwoNumbers (num1, num2) {

    // 1st Method
    // let result = num1 + num2 // Declare variable
    // return result; // Function kii defination ha "return" kye bad yeah work nhi karta ha
    // console.log("Coach"); // console is not executable


    // 2nd Method
    return num1 + num2 // return sye ap without console-log kye print kar sakta ha
}

// addTwoNumbers(3, 4) // () brackets wali values ko "Arguments" khata ha
// addTwoNumbers(3, "4") // Is me is nye 2 values ko as a string ly lye ha 
// addTwoNumbers(3, "H") // Is me is nye 2 values ko as a string ly lye ha 
// addTwoNumbers(3, null) // Null ko consider nhi karye ga 

const result = addTwoNumbers(3, 4) // Store value in variable
// console.log("Result: ", result);



function loginUserMessage(username = "Sam") { // user is not input any value show default value "Sam" // ab hum if condition me jye gye hi nhi kue kye user ki value kabhi undefine nhi ho gi us ki jagah Sam a jye ga  
    
    // if (username === undefined) {
    if (!username) { // ! exclamination sign true ko false me or false ko true me convert kar dyta ha
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Coach"))
// console.log(loginUserMessage("")) // Show this message "just logged in" without enter value
console.log(loginUserMessage()) // Show this message "undefined just logged in" with empty string