// Primitive
// call by value changes happens in copy
// 7 types : string,number,boolean,null,undefined,symbol,bigInt

// Non-Primitive(Refrence)
// array,object,functions

const heros = ["ironman","captain america","thor"]
let myobj = {
    name:"abcd",
    age:20,
}

const myfunction = function(){
    console.log("hello world");
}

// ******************************************************************************************

// Stack (Primitive),Heap (Non-Primitive)

let myname = "dikshitasingh"

let anothername = myname
anothername = "cutedino"

console.log(myname);
console.log(anothername);

let userOne = {
    email:"user@gmail.com",
    upi:"user@bhim"
}

let usertwo = userOne

usertwo.email = "abc@gmail.com"

console.log(userOne.email);
console.log(usertwo.email);
