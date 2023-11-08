const score = 100
// console.log(score);


const balance = new Number(100) //100% define number by using this new Number method
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); // Create ecomerce website use tofixed property (imp)


const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(3));

const anyNumber = 1000000
// console.log(anyNumber.toLocaleString('en-PK'));


// ************** Maths ****************
// Math javaScript kii bydefault laibrary ha

// console.log(Math);
// console.log(Math.abs(-4)); //abs absolute use karna sye sirf - values + me convert hoti ha
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.3)); // choes Top values
// console.log(Math.floor(4.8)); // choes Lower values
// console.log(Math.max(4, 8, 6, 2)); 
// console.log(Math.min(4, 8, 6, 2)); 

console.log(Math.random()); // Math.random kii value hamesha 0 or 1 kye bich me aye gii
console.log(Math.random()*10); 
console.log((Math.random()*10) + 1); // 0.04 avoid this case use + 1
console.log(Math.floor(Math.random()*10) + 1); // use Math.floor for round about value


// Imp Formula
const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Imp line # 40