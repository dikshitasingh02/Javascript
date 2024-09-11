// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocalString());
console.log(typeof myDate);

let mycreatedate = new Date(2023,0,23)
let mycreatedate2 = new Date(2023,3,5,10,5)
let mycreatedate3 = new Date("2023-01-14")
let mycreatedate4 = new Date("01-14-2023")
console.log(mycreatedate2.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday:"long"
})