// api sye response per ? use karta ha => agar value ha to yeah karye

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4) //empty {} lagana sye direct value ati ha //{} dyna na dyna sye koi farak nhi parta ha // {} is optional parameter // {} is target and obj1, 2, 4 is source

const obj3 = {...obj1, ...obj2, ...obj4} // Use this syntax
// console.log(obj3);


const users = [ // database value fetch use this syntax
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    }
]

// console.log(users[1].email); // Print first object email

// console.log(object.keys(obj2)); // Brackets () me us object ka name likha gye jis ki ap ko keys chahye ha // Mujha obj2 kii keys chahye ha // keys string me aye gii

// console.log(object.values(obj2)); // keys kye ilawa hum values bhi nikal sakta ha

// console.log(object.entries(obj2)); // bohat kam use hoat ha but important ha // entries har key value ko array me convert kar dati ha

// console.log(obj2.hasOwnProperty(5)); // hasOwnProperty sye ap obj2 sye poch sakta ha kye ap kye pass existing property 5 ha yeah nhi // hasOwnProperty ka result boolean (true or false) me ata ha




// Destructuring Array and Objects


// Objects destructuring
const course = {
    courseName: "Programming",
    price: "999",
    courseInstructor: "Coach"
}

// course.courseInstructor

const {courseInstructor} = course // use this code syntax // This is called object restructure
const {courseInstructor: instructor} = course // using colons : set name on your choice
console.log(courseInstructor);
console.log(instructor);



// API's Concept (Apna kaam kisi or kye sir dalna ko API's khata ha)
// {
//     // backend sye jo values atii ha usye kasye likhata ha backend sye values JSON me ati ha 
//     // JSON is tarha sye dekha ga // yeah object hi ha bus object ka name nhi ha
   
//     "name": "Coach", //JSON me keys or values 2 hii string me hoti ha
//     "courseName": "JS Course",
//     "price": "free"
// }    



// API's received in Arrays format
[
    {}, // Multiple objects in one Array
    {},
    {},
]