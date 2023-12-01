// without koi comperison operator use kye ap maan lye yeah "true value" ha yahi "truthy" ha 



// const userEmail = "h@coach.ai"
// const userEmail = ""  // "Empty String" me maan lye gye ha kye yeah "False" ha
const userEmail = []

if (userEmail) {
    console.log("Got User Email");
} else {
    console.log("Don't have user email");
}


// Detect "Array" is "Empty"
if (userEmail.length === 0) {
    console.log("Array is empty");
}


// falsy Values
// false, 0, -0, BigInt 0n (BigInt datatype me 0n ko bhi false mana jata), "", null, undefined, NaN

// truthy Values
// "0" (string wala "0" truthy value ha), 'false', " " (String me koi bhi value aye gii "space" bhi wo sab "truthy value" ha), [], {}, function(){} (is tarha sye "function declare" ha to wo bhi "truthy value" ha)



// Detect Object is "Empty"
const emptyObj = {}

if (Object.keys(emptyObj).length === 0) { // Direct call object using capital O "Object" // yeah pura ap ko 1 array provide karye ga or us per "length" property laga lye gye
    console.log("Object is Empty");
}



// Nullish Coalescing Operator (??) : null, undefined (Is ki sari working "null or undefined" per hoti ha)

let val1;
// val1 = 5 ?? 10 // database sye agar "runtime" per "responce" nhi ata to wo second value assign kar dye
// val1 = null ?? 10
// val1 = undefined ?? 15 // 10 nhi ata koi "function" aye ga jo "database" sye call ho

val1 = null ?? 20 ?? 15 // 1st function null, 2nd function 10 or 3rd function 15 return karta ha to jo bhi isye 1st value isye mila gi wo assign ho jye gii

console.log(val1);




// Terniary Operator // Yeah ifelse ka chota sa syntax ha

// condition ? true statements : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less then 80") : console.log("More then 80");