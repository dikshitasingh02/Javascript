const myobject = {
    js:'javascript',
    cpp:'C++',
    py:'python',
    swift:'swift',
    rb:'ruby'
}
for (const key of myobject) {
    console.log(`${key} shortcut is for ${myobject[key]}`);
}

const programming = ["js","cpp","py","swift","rb"]
for (const key in programming) {
    console.log(programming[key]);
}

// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('Fr', "France")
// map.set('IN', "India")

// for (const key in map) {
//     console.log(key);
// }