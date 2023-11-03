// Primitive

// 7 types of primitive : String, Number, Boolean, Null, undefined, Symbol, BigInt

const score = 100 // This is Number
const isLoggedIn = false // This is Boolean
const outsideTemp = null // This is Boolean
let userEmail; // Value is undefined

// Define Symbol
const id = symbol('123') //Symbol unique cheez kye lye use hota is lye ID me use kye ha
const anotherId = symbol('123') //Symbol me Id or anotherId ki values same pass karna sye bhi result me same values nhi mila gi
const bigNumber = 56878932443125n // bigNumber represent bigInt // use n in last

console.log(id === anotherId);



// Non-Primitive/ Refrence //Non-Primitive kye datatype ko function hii bola jata ha 
// Function kye datatype ko "function Object" bola jata ha

// Types of Non-primitive/ Reference : Array, Object, Function

const heros = ["Superman", "Thor", "Ironman"] //Arrays write in [] square brakets and enter vales in qutations ""

let myObj = {
    name: "Coach",
    age: 20,
} //Objects write in {} Qarly brakets and enter vales in key value pairs

const myFunction = function(){
    console.log("Hi, Coach");
} //Write function and store value in myFunction variable 
// Function kye datatype ko "function Object" bola jata ha



//Easy way to find Datatype of any variable
console.log(typeof bigNumber); // typeof use to find Datatype of any variable
