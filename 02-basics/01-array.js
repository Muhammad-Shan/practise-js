const myArray = [1, 2, 3, 'True', 'Coach'] // Array write in [] square brackets // Array me har 1 value ko element khata ha
const myHeros = ['Superman', 'Thor']
const myArray2 = new Array(1, 2, 3, 4) // use keywords

// console.log(myArray[0]);


// Array Methods
// myArray.push(6) // Push method use values add in Array
// myArray.push(7)
// myArray.pop() // Pop remove array last value

myArray.unshift(10) // unshift ki value array me sab sye pehla 0 index me add ho jati ha

myArray.shift() // shift array ki first value ko remove kar dati ha

// console.log(myArray);

// console.log(myArray.includes('Coach')); // Question methods // includes wali value Array me exsit karti ha yeah nhi
// console.log(myArray.indexOf('Coach')); // VAlue kis index per exist karti ha


// const newArray = myArray.join() // join is convert Array into String
// console.log(newArray);
// console.log(typeof newArray); // change type in Array to String



// slice or splice
console.log("A ", myArray);

const myNewArray = myArray.slice(1, 3)
console.log("Slice ", myNewArray); // last index not include in Slice method
console.log("B ", myArray);


const myNewArray2 = myArray.splice(1, 3)
console.log("Splice ", myNewArray2); // last index include in Splice method
console.log("C ", myArray); // Splice portion nikal jye ga or original array [1, 'Coach'] a jye gi




// Shallow copy me jo change karye gye wo original me bhi change ho ga
// Deep copy me ap ko 1 copy dyta ha us me change sye original me change nhi hota ha 