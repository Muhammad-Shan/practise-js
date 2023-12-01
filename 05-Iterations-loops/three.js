// for of loop

// ["", "", ""]
// [ {}, {}, {}] // 1 object kii me jye or kuch detail lye kar aye

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // object means kis cheez per loop lagana ha
    // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {

    if (greet == " ") { // Using continue to avoid print space " "
        continue
    }
    // console.log(`Each char is: ${greet}`);
}


// Maps in JavaScript
// "Maps" Array jasye hii hota ha // lakin thora sa iteration // Map me unique values hoti ha 
// Map object ha jo "key value pair" ko hold karta ha // Jis order me ap values dye gye us order ko bhi yaad rakhta ha

const map = new Map()
map.set('PK', "Pakistan")
map.set('FT', "Falasteen")
map.set('SA', "Saudi Arabia")
map.set('PK', "Pakistan") // Yeah dubara print nhi ho ga kue kye map "unique values print" karta ha

// console.log(map);

for (const [key, value] of map) { // Key or value ko alag alag hold karna kye lye is syntax me likhata ha [key, value]
    // console.log(key, ':-', value);
}


const myObject = {
    'game1': 'Metal Slug',
    'game2': 'KOF 97',
    'game#': 'PUBG'
}

// for (const [key, value] of myObject) { "forof loop" object per asye work nhi karta ha
//     console.log(key, ':-', value);
// }