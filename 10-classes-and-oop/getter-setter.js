class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }

    get email(){ // This is getter method
        return this._email.toUpperCase()
        // return `${this._email}coach`
    }
    set email(value){ // This is setter method
        this._email = value
    }


    get password(){ // This is getter method
        // return this._password.toUpperCase()
        return `${this._password}coach`
    }
    set password(value){ // This is setter method
        this._password = value
    }
}

const coach = new User("coach@google.com", "abc")
console.log(coach.email);
console.log(coach.password);