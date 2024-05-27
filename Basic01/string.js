const name = "dikshita"
const repocount = 50

// console.log(name + repocount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repocount}`);


const gamename = new String('amazing')

console.log(gamename[0]);
console.log(gamename.__proto__);


console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('z'));

const newString = gamename.substring(0,4)
console.log(newString);

const newString2 = gamename.slice(-8,4)
console.log(newString2);

const newstringone = "    abcd    "
console.log(newstringone);
console.log(newstringone.trim());

const url = "https://dikshita.com/dikshita%20singh"
console.log(url.replace('%20','-'));
console.log(url.includes('dikshita'))

console.log(gamename.split('-'));