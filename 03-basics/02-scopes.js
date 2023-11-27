// If kye bahir jo bhi likha ha wo "Global Scope" 
// Global scope me jo bhi likha gye wo value scope kye andar ap kye pass available hoti ha lakin // Scope kye andar jo value likhata ha wo bahir nhi jani chahye ha 


// var c = 300 // var kye bara me baat nhi kara gye
let a = 300

if (true) { 
    let a = 10 // If kye andar jo bhi likha ha wo "Block Scope"
    const b = 20
    // var c = 30 // Not use
    // console.log("Inner: ", a);
}


// {} karli brackets ko bhi "SCOPE" bolta ha // {} karli brackets jab kisi "function or if else" kye sath ata ha tab isye "SCOPE" bolta ha // "function" ka scope yeah "if else" ka scope


// console.log(a);
// console.log(b);
// console.log(c);



// Global scope ko "inspect kye Console" me run karna sye answer or ata ha or "VS Code" me "node" sye run karna me answer different ata ha




// Nested Scope
// "child functions parent kye variables ko access kar sakta ha" this is called Nested Function/ Scope 

function one() {
    const username = "Coach"

    function two() {
        const website = "youtube"
        console.log(username); // ap kye andar ka function bahir kye variables ko access kar sakta ha isi ko "Closures" bhi khata ha // "Closure" me or bhi details ha yeah basics ha
    }
    // console.log(website); // yeah console error dye ga to "two()" execute hii nhi ho ga

    two()
}

// one()


// Example
if (true) {
    const username = "Shan"
    if (username === "Shan") {
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website); // Yeah run nhi ho ga kue kye is ka scope if statement kye andar tha  
}

// console.log(username);


// +++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5)); // Is case me ap function sye pehla declare kar sakta ha
function addone(num) {
    return num + 1
}



// isi cheez /Function ko ap kahi jagho per ap dusrii tarha sye hota hua dekha gye

addTwo(5) // Yeah access nhi ho ga kue kye isye function /variable sye pehla declare kar dye ha

const addTwo = function (num) { // yeah 2 functions ha but isye kabhi kabar "expression" bhi bolta ha 
    // is me addTwo 1 "variable" kii tarha ha or "variable" kuch bhi hold kar sakta ha
    return num + 2
}


// "this keyword" current contaxt kye barye me batata ha