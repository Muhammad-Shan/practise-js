// let myName = "Coach         "
// let myChannel = "Chai      "

// console.log(myName.trim().length);
// console.log(myName.truelength);


let myHeros = ["thor", "loki"]


let heroPower = {
    thor: "Hammer",
    loki: "Magic",

    getLokiPower: function(){
        console.log(`Loki power is: ${this.loki}`);
    }
}

Object.prototype.coach = function(){
    console.log(`coach is present in all objects`);
}

Array.prototype.shan = function(){
    console.log(`shan says Hi`);
}
// heroPower.shan() // no access
// myHeros.shan()

// heroPower.coach() // Object
// myHeros.coach() // Array



// --------------------- inheritance ------------------------
const User = {
    name: "Coach",
    Email: "123@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// Modern Syntax // sab log yeah use karta ha
Object.setPrototypeOf(TeachingSupport, Teacher)


let anotherUsername = "ChaiAurCode      "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"coach".trueLength()
"iceTea".trueLength()