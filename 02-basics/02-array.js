const marvel = ['Thor', 'Ironman', 'Spiderman']
const dc = ['Superman', 'Batman', 'Flash'] 

// marvel.push(dc) // push dc ki full array ko as a element lye kar print karwa dye ga

// console.log(marvel);
// console.log(marvel[3][1]); // dc array sye kuch print karwan kye lye dc array ka index likha gye or array wali value ka index likha gye. Exp: [3][1] 3 index array ka 1st element


// other method // concat
// const allHeros = marvel.concat(dc) // concat new array return karta ha or concat 2 arays ko merge karta ha
// console.log(allHeros);


// new mrthod // sprad
const newHeros = [...marvel, ...dc]
// console.log(newHeros);


const anotherHeros = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherHeros = anotherHeros.flat(Infinity) // flat sab arrays ko concat kar kye 1 array me convert kar dyta ha //infinity dyna sye jitni bhi arrays ho gi sab ly ly ga  
console.log(realAnotherHeros);


// Mostly use this method
console.log(Array.isArray("Coach")) // kisi webpage sye ap data select karta ha to wo alag form 'nodelist, String yeah Object' me ata ha waha array ko is tarha use kar sakta ha
console.log(Array.from("Coach")) // using from String convert into Array

console.log(Array.from({name: "Coach"})) // interesting case // object is not directly convert in array // show empty Array [] => 'not converted'


let score1 = 100
let score2 = 200
let score3 = 300 //Multiple variables convert in array
console.log(Array.of(score1, score2, score3));