// define "Getters and Setters" by Objects base

const User = {
    _email: 'SH@hs.com',
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    
    set email(value){
        this._email = value
    }
}

const chai = Object.create(User) // This is factory function
console.log(chai.email);