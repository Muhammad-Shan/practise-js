class User {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new User("coach", "chai@gmail.com", "123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());


// behind the scene // Agar "class" ka syntax na mila hota to kasye karta
function User1 (username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User1.prototype.encryptPassword = function(){
    return `${this.password}xyz`
}

User1.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const tea = new User1("shan", "tea@gmail.com", "456")

console.log(tea.encryptPassword());
console.log(tea.changeUsername());