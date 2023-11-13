// dates 
let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());

// console.log(typeof myDate); // find data type of this date "date datatype is object"


// let myCreatedDate = new Date(2023, 0, 23) //Months start 0 in JavaScript
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());


// ***************TimeStamp*****************
let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime()); //conert in miliseconds
// console.log(Math.floor(Date.now()/1000)); //convert in seconds


let newDate = new Date()
console.log(newDate.getMonth() + 1); // find month add +1 sy user ko existing month mila ga
console.log(newDate.getDay()); // find day


console.log(newDate.toLocaleString('default', {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    // timeZone: ? //Nhi pata kasye likhana ha
})) // Mostly use this date method