function saymyname(){
    console.log("D");
    console.log("I");
    console.log("K");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("A");
}
saymyname()

function addtwonumbers(number1,number2){
    console.log(number1+number2);
}
addtwonumbers(3,5)

function addtwonumbers(number1,number2){
    let result = number1 + number2
    return result
    return number1+number2
    console.log(number1+number2);
}
const result = addtwonumbers(3,5)
console.log("result:",result);

function loginusermessage(username){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginuserMessage("dikshita"));

function calculatecartprize(value1,value2,...num1){
    return num1
}
console.log(calculatecartprize(200,400,500,2000));

const user = {
    username:"daksh",
    price:200
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and prize is ${anyobject.price}`);
}
handleobject(user)
handleobject({
    username:"sam",
    price:300
})

const myarray = [200,100,500,400]
function returnsecondvalue(getarray){
  return getarray[1]
}
console.log(returnsecondvalue(myarray));