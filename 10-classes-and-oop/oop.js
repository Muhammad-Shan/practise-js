// starts in object literal

const user = { // this is the object literal
    username: "Coach",
    loginCount: 8, // Properties
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// current context kii baat karna kye lye "this" keyword use hota Exp: 2 username ho to kis per loop lagna ha



// -- Constructor Function

// const promiseOne = new Promise() // new keyword is constructor function // Yeah allow karta ha 1 hi object literal sye ap multiple instances bana sako
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username = username; // left wali value variable ha "this" sye pata chala ga kon sa variable or right wali value wo ha jo ap pass kar kye dye raha ho 
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greetings = function(){
        console.log(`Welcome ${this.username}`);
    }

    return this // return this likhana yeah na likhana sye koi farak nhi parta ha
    // return this //return this use karna ab jo bhi isye use karye ga wo aram sye sab values access kar sakta ha
}

const userOne = new User("Shan", 12, true)
const userTwo = new User("Ahmad", 11, false)
console.log(userOne.constructor);
console.log(userTwo);



// using new keyword
// 1. create new object
// 2. call constructor function using new keyword
// 3. using this keyword all argument injected in this keyword
// 4. argument received in function