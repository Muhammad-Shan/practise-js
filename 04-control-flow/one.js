// sara program 1 hii dafa run nhi hona chahye ha isi ko control-flow / Logic-flow khata ha
// loin karta hua login ka code execute ho // Sign Up karta hua sign up ka code execute ho 


// 1. if statement
const isUserLoggedIn = true
const temperature = 41

// if ( temperature === 41 ) { // if statement me condition true ho gi to hi internal code execute ho ga
//     console.log("Less then 50");
// }
//     console.log("temperature is greater then 50"); //yeah execute ho ga hi kue kye yeah "if" sye bahir ha


// if ( temperature === 41 ) {
//     console.log("Less then 50");
// } else {
//     console.log("temperature is greater then 50");
// }


// if (false) { // condition false hona per internal code execute nhi ho ga
    
// }


// Compersion operators "<, >, <=, >=, ==, !=, ===, !==" (=== type bhi check karta ha 2 === "2" show false, !== using strict checking, 2 != 3 check negative statements)


// const score = 200

// if (score > 100) {
//     // var power = "fly" // var ka scope complete global ha is lye if sye bahir wala console bhi print ho jye
//     const power = "fly"
//     console.log(`User Power: ${power}`);
// }

// console.log(`User Power: ${power}`);



// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2"); //Don't use this method // shorthand notation //Is ko implicit scope khata ha or yeah 1 line me execute hota ha

// if (balance < 500) { // Multiple conditions
//     console.log("less then 500");
// } else if (balance < 750) {
//     console.log("less then 750");
// } else if (balance < 900) {
//     console.log("less then 900");
// } else {
//     console.log("less then 1200");
// }


const userloggedIn = true 
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userloggedIn && debitCard && 2==2) { // 2 conditions "true" ho gi to user course buy kar sakye ga 1 bhi statement false ho gye to us code me jye ga hi nhi
    console.log("Allow to buy Course");
}

if (loggedInFromGoogle || loggedInFromEmail || guestUser) { // 2 me sye 1 bhi condition "true" ho gi to user login ho jye ga // || guestUser bhi is kye agye likh sakta ha
    console.log("User Logged In");
}