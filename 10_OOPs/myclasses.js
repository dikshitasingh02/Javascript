//ES6

class User{
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return`${this.password}abc`
    }
    changeUsername(){
        return`${this.username.toUpperCase()}`
    }
}
const apple = new User("apple","apple@gmail.com","321")
console.log(apple.encryptPassword());
console.log(apple.changeUsername());


//BEHIND THE SCENE

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}
User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}
const beatle = new User("beatle", "beatle@gmail.com", "123")
console.log(beatle.encryptPassword());
console.log(beatle.changeUsername());