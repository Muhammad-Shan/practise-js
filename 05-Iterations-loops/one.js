// for loop

for (let i = 0; i < 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is best number");
    }
    // console.log(element);
}

// console.log(element); // Yeah "element block scope" sye bahir declare kye ha is lye print nhi ho ga (element is not defined) "error" aye ga


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value: ${j} and inner loop ${i}`); // "Outer loop" 1 bar chala ga or "inner loop" har dafa 10 bar chala ga
        // console.log(i + '*' + j + ' = ' + i*j);
    }
}


let myArray = ["Superman", "Thor", "Ironman"]
// console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
}


// break and continue "Imp key points"
// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break // Kisi bhi control flow ko break karna ho to hum "break" likhata ha
//     }
//     console.log(`Value of index is: ${index}`);
// }



// continue
for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue // "continue" means "mention iteration" ko ignore kar dye ga or usye "print" nhi karye ga
    }
    console.log(`Value of index is: ${index}`);
}