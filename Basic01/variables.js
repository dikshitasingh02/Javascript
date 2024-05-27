const accountId = 123456
let accountEmail = "abc@gmail.com"
var accountPassword = "123"
accountCity = "jaipur"
let accountState;

//accountId = 2 // not allowed


accountEmail = "def@gmail.com"
accountPassword = "1212"
accountCity = "Banglore"

console.log(accountId);

/*
Prefer not to use var coz of block scope and functional sc
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])