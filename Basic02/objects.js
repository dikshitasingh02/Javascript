// singleton
// object.create

// object literals

const mysym = Symbol("key1")

const jsuser = {
    name: "Dikshita",
    [mysym]: "mykey1",
    age: 19,
    location: "Jaipur",
    email: "abcd@gmail",
    isLoggedIn:false,
    lastlogindays:["monday","wednesday"]
}
console.log(jsuser.email);
console.log(jsuser["email"])
console.log(jsuser[mysym]);

jsuser.email = "abc@gamail.com"
Object.freeze(jsuser)
jsuser.email = "abc@yahooo.com"
console.log(jsuser);

jsuser.greeting = function(){
    console.log("hello");
}
jsuser.greetingtwo = function(){
    console.log(`hello,${this.name}`);
}
console.log(jsuser.greeting());
console.log(jsuser.greetingtwo());