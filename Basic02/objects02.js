// const tinderUser = new Object()
const tinderuser = {}

tinderuser.id = "123abc"
tinderuser.name = "Sam"
tinderuser.isLoggedIn = false

console.log(tinderuser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Daksh",
            lastname:"singh" 
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a" , 2: "b"}
const obj2 = {3: "a" , 4: "b"}
const obj3 ={obj1 , obj2}
const obj4 = Object.assign({},obj1,obj2)
console.log(obj3);
console.log(obj4);
const obj5 = {...obj1,...obj2}

const user = [
    {
        id:1,
        email: "d@gmail.com"
    },
    {
        id:1,
        email: "d@gmail.com"
    },
    {
        id:1,
        email: "d@gmail.com"
    },
    {
        id:1,
        email: "d@gmail.com"
    },
]
URLSearchParams[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));
console.log(Object.values(tinderuser));
console.log(Object.enteries(tinderuser));
console.log(tinderuser.hasownProperty('isLoggedIn'));


const course = {
    coursename:"js course",
    price:"999",
    courseinstructor:"hitesh"
}
// course.courseinstructor
const {courseinstructor} = course
const {courseinstructor:instructor} = course
console.log(courseinstructor);
console.log(instructor);