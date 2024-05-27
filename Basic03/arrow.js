const user = {
    username:"hitesh",
    price:999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`)
        console.log(this);
    }
}
user.welcomemessage()
user.username = "sam"
user.welcomemessage()
console.log(this);

function chai(){
    let username = "hitesh"
    console.log(this);
}
chai()

// const chai = function(){
//     let username = "dikshita"
//     console.log(this.username);
// }

const chai = () => {
    let username = "dikshita"
    console.log(this);
}
chai()

const addtwo = (num1,num2) => {
    return num1 + num2
}
const addtwo2 = (num1,num2) =>  num1 + num2
const addtwo3 = (num1,num2) => ( num1 + num2)
const addtwo4 = (num1,num2) => ({username:"dikshita"})
console.log(addtwo(3,4));