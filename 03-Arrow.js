const user = {
    username: "Coach",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`); //this keyword current context ko refer krta ha 
        // Is scope me jitna bhi variables ha un ko access karna kye lye "this" laga dye gye
        console.log(this);
    }
}


// user.welcomeMessage()
// user.username = "Sam" // Dubara username change karna sye "Value /Context" change ho jye gii or username "Sam" print ho ga
// user.welcomeMessage() // "Context /Values" change ho jye gii

// console.log(this); // Node invernment me "this" "Empty Object" ko refer karta ha 



// function one() {
//     let username = "Ahmad"
//     console.log(this.username); // Functions me "this" use nhi kar sakta
// }


// const one = function () {
//     username: "Ahmad"
//     console.log(this.username);
// }

// one()


// Node invernment me "this" "Empty Object" ko refer karta ha // ++++++++ (F12) Browser me jab bhi wo engine run karta ha to "console.log(this)" sab sye zyada "global object" jo ha wo "window kye object" ha ++++++++ (Browser me jo global object ha wo window kye object ha) 
// This is "Pre-request"



// ++++++++++ Method to create "Arrow Function" ++++++++++
const chai = () => {
    username: "Ahmad"
    console.log(this);
}

// chai()


// const addTwo = (num1, num2) => { // Basic syntax of "Arrow Function"
//     return num1 + num2 // Karli braces {} me "return" use karna lazmi ha  // This is "Explicit return"
// }

// const addTwo = (num1, num2) => num1 + num2 // Other method to write "Arrow Function" // This is called "Implicit return"

// const addTwo = (num1, num2) => ( num1 + num2 ) // Other method to write "Arrow Function" // "Implicit return"

const addTwo = (num1, num2) => ({username: "Coach"}) // Return object using Paranthisis ()
console.log(addTwo(3, 4))



// +++++++++++++ Loop Discussion +++++++++++++++
// const myArray = [1, 2, 3, 4]
// myArray.forEach(function () {}) // Correct syntax to declare an function
// myArray.forEach(() => {})
// myArray.forEach(() => ())
