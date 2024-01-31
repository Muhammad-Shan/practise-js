// Promise ka simple sa mtlb ha jo bhi ap nye us ko task dye ha wo abhi kye abhi “Que” me lag kar complete nhi ho ga “Que” me to lag gye ha lakin abhi kye abhi us ko load nhi kye gye ha abhi complete nhi ho sakta wo

// Promise kye 3 states ha
// 1.	Pending
// 2.	Fulfilled
// 3.	Rejected


// zyada tar operations me promises consume hii karta ha //bohat kam banata ha



// fetch('https://something.com').then().catch().finally() //Agar response aye ga to '.then' me a jye ga or agar koi error ho ga to '.catch' me a jye ga // '.finally' me sab kuch a jata ha 'finally' to run hota hi hota ha. 


// Create Promise
const promiseOne = new Promise(function(resolve, reject){ // Promise me function hota ha
    // Do an async task
    // Database calls, Cryptography, Network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve() // Use this resolve method to connect "resolve and .then"
    }, 1000)
})


// Consume Promise
promiseOne.then(function(){ // .then ka sidha relation/ Connection ap kye "resolve" kye sath ha
    console.log("Promise Consumed");
})



// 2 promise
new Promise(function(resolve, reject){ 
    setTimeout(function(){
        console.log('Async task 2');
        resolve()
    }, 1000)
}).then(function(){  // Kisi variable me store nhi karye to isye direct .then bool sakta ha
    console.log("Task 2 Consumed");
})



// 3 promise
const promiseThree = new Promise (function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Coach", email: "coach@example.com"}) // resolve kye parameters me ap data bhi pass kar sakta ho // zyada tar ap ko jo data pass hota hua nazar aye ga wo object ho ga
    }, 1000)
})

promiseThree.then(function(user){ // .then sye resolve ko fetch kar raha ha //
    console.log(user);
})



// 4 promise
const promiseFour = new Promise (function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Coach", Password: "123"})
        } else {
            reject ("ERROR: Something went wrong")
        }
    }, 1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){ // Error kye lye .catch laga lye gye
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected")) //Jo kaam karna tha wo ho gye ha yeah nhi // yeah hamesha execute ho ga



// 5 promise
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "JavaScript", Password: "123"})
        } else {
            reject ("ERROR: JS went wrong")
        }
    }, 1000)
})


// second syntax to consumed promise
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);   
    }
}

consumePromiseFive()



// Fetch Method

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()



// Other Method
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))