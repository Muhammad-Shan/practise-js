function setUsername(username) {
    // Complex DB calls
    this.username = username
}


function createUser(username, email, password) {
    setUsername.call(this, username) // "call" use karye gye uper wala function ko "call" karna kye lye or refrence ko "save" karwana kye lye "this" use karye gye // is sye yeah wala this use ho ga

    this.email = email
    this.password = password
}


const chai = new createUser("chai", "chai@fb.com", "123")
console.log(chai);