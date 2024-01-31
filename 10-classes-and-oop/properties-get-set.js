// Old method to define "Getters and Setters"

function User(email, password){
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', { // yeah getters or setters hii kii properties ha
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    
    Object.defineProperty(this, 'password', { // yeah getters or setters hii kii properties ha
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}

const chai = new User("chai@chai.ai", "chai")
console.log(chai.email);