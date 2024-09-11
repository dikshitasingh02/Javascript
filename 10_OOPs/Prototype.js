// let myName = "Dikshita     "
// let mychannel = "dinome     "
// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}
Object.prototype.dikshita = function(){
    console.log(`dikshita is present in all objects`);
}
Array.prototype.heydikshita = function(){
    console.log(`dikshita says hello`);
}
// heroPower.dikshita()
// myHeros.dikshita()
// myHeros.heydikshita()
// heroPower.heydikshita()


// inheritance
const User = {
    name: "apple",
    email: "apple@google.com"
}
const Teacher = {
    makeVideo: true
}
const TeachingSupport = {
    isAvailable: false
}
const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
Teacher.__proto__ = User



// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "dinome     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"dikshita".trueLength()
"iceTea".trueLength()