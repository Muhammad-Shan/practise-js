const name = "Coach" // declare string
const repoCount = 50

// console.log(name + repoCount + "Value"); //don't use this method to write string

// console.log(`My name is ${name} and my repocount is ${repoCount}`); // Write string using this method

// Other method to declare string
const gameName = new String ("Sh-an")
// console.log(gameName[1]); // access keys [0]
// console.log(gameName.__proto__);


// Use some objrcts
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2)); //Position to character
// console.log(gameName.indexOf("a"));//Character to position 

// const newString = gameName.substring(0, 2)
// console.log(newString);

// const anotherString = gameName.slice(-4, 2) //Nagitive values use in only slice method
// console.log(anotherString);


//Trim
const newStringOne = "   Coach   " // User login form extra spaces remove using trim
console.log(newStringOne);
console.log(newStringOne.trim());


// Replace
const url = "https://www.youtube.com/youtube%20count" // Browser not understand this type of values %20 etc
console.log(url.replace("%20", "-")) // %20 replace in -

console.log(url.includes("youtube")); // Find value is appear on url or not

console.log(gameName.split("-")) // Convert String to Array
