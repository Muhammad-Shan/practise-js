// for each loop

const coding = ["js", "ruby", "JavaScript", "cpp"]

// coding.forEach(function (item) { // "call back function" ka "name" nhi hota ha
//     console.log(item);
// })


// coding.forEach( (item) => { // using arrow function to print "forEach loop"
//     console.log(item);
// } )


// function printMe(item) { // "printMe" apna pass 1 item lyta ha or jo bhi ap is ko dyta ho us ko print kar dyta ha
//     console.log(item);
// }

// coding.forEach(printMe) // Call "coding" function using "forEach loop"


// coding.forEach( (item, index, arr) => { // forEach me or bhi "parameters" ata ha "Exp: index, arr(array)"
//     console.log(item, index, arr);
// } )


const myCoding = [
    {
        languageName: "JavaScript",
        languageFileName: "js"
    },
    {
        languageName: "Cpp",
        languageFileName: "c++"
    },
    {
        languageName: "Python",
        languageFileName: "py"
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName); // . laga kar kisi bhi Array ky object me sye koi bhi value nikal sakta ha
    // console.log(item.languageFileName);
} )