// let myMap = new Map();

// // console.log(myMap);
// // console.log(typeof myMap);
// // console.log(myMap.size);

// const o = { id: 1 };
// const f = function () { };

// myMap.set('the string', 'This is the value for the string key');
// myMap.set(o, 'This is the value for the object key');
// myMap.set(f, 'This is the value for the function key');

// // console.log(myMap);
// // console.log(myMap.size);

// // console.log(myMap.get('the string'));
// // console.log(myMap.get(o));
// // console.log(myMap.get(f));

// // for (const pair of myMap) {
// //     console.log(pair);
// // }

// // for (const [key, value] of myMap) {
// //     console.log(`${key}        ${value}`);
// // }

// for (const key of myMap.keys()) {
//     console.log(`${key}`);
// }

// console.log("\n");
// for (const value of myMap.values()) {
//     console.log(`${value}`);
// }

// --------------------------------------

var phoneDirectoryMap = new Map();
phoneDirectoryMap.set("Manish", 123456);
phoneDirectoryMap.set("Abhijeet", 654321);

// console.log('size of the map is', phoneDirectoryMap.size);
console.log(phoneDirectoryMap.has("Manish"));

// phoneDirectoryMap.delete("Manish");
phoneDirectoryMap.clear();
console.log(phoneDirectoryMap.has("Manish"));
console.log('size of the map is', phoneDirectoryMap.size);