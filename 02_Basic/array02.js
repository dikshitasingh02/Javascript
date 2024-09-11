const marvel_heroes = ["thor","ironman","spiderman"]
const dc_heroes = ["superman","batman","flash"]

marvel_heroes.push(dc_heroes)
console.log(marvel_heroes);
console.log(marvel_heroes[3][1]);

const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allheroes);

const allnewheroes = [...marvel_heroes, ...dc_heroes]
console.log(allnewheroes);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const realanother_array = another_array.flat(Infinity)
console.log(realanother_array);

console.log(Array.isArray("Cupcake"));
console.log(Array.from("Cupcake"))
console.log(Array.from({name:"Cupcake"})) //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));