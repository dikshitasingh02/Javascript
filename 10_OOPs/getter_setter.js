class User{
    constructor(email,password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCAse()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hello`
    }
    set password(value){
        this._password = value
    }
}
const coffee = new User("coffee@milk","cba")
console.log(coffee.email);