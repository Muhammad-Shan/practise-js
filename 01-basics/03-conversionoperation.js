let score = "33"
//console.log(typeof score)
//console.log(typeof (score))

let valueInNumber = Number(score) // string conert in number
//console.log(typeof valueInNumber)



// Notes
// "33" => 33 // string convert in number
// "33abc" => // Not convert this type of string provide "NaN stands for Not A Number"
// true => // convert in 1 & false conert in 0

//let isLoggedIn = 1
let isLoggedIn = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn)


// Notes
// 1 => true & 0 => false
// "" => false //empty strings show false
// "Shan" //value add in string then show true


let someNumber = 33
let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)


// ********** Operations ************
let value = 3
let negValue = -value
//console.log(negValue);

// Basic Operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);
// console.log(2**3); //find power using **

let str1 = "Hello"
let str2 = " Coach"
let str3 = str1 + str2
//console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + "2" + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 6);
console.log(+true); // +true => 1
console.log(+""); // +"" => 0

let num1, num2, num3
num1 = num2 = num3 = 2+2

let gameCounter = 100
//gameCounter++;
++gameCounter;
console.log(gameCounter);

//link to study: https://tc39.es/ecma262/#sec-type-conversion
