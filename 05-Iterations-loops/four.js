const myObject = {
    Js: 'JavaScript',
    Cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(key); // Print key
    // console.log(`${key} Shortcut for ${myObject[key]}`); // Print key and value
}


const programming = ["js", "cpp", "ruby", "swift"]

for (const key in programming) {
    // console.log(programming[key]);
}


// const map = new Map()
// map.set('PK', 'Pakistan')
// map.set('FT', 'Falasteen')
// map.set('SA', 'Saudi Arabia')

// for (const key in map) { // Nothing "print" because "forin" me map asye print nhi hota ha
//     console.log(key);
// }