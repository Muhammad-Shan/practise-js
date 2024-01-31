class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const coach = new User("Coach")
// console.log(coach.createId())


class Teacher extends User {
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const Iphone = new Teacher("Iphone", "i@phone.com")
Iphone.logMe()
// console.log(Iphone.createId()) // This is not allow to any child or parent