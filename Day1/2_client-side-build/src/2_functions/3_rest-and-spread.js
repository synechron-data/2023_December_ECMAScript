// If we use, ... operator, on the lefthand side of assignment operator - REST
// If we use, ... operator, on the righthand side of assignment operator - SPREAD

// In ECMAScript 2015, we can use ... only with Iterable Objects (Arrays)
// In ECMAScript 2018, we can use ... with normal Objects also

// -------------------------------------------------- Array Spread

// var arr1 = [1, 2, 3, 4, [5, 6]];

// // var arr2 = arr1;            // Reference Copy

// // Shallow Copy
// // var arr2 = new Array();
// // for (let i = 0; i < arr1.length; i++) {
// //     arr2[i] = arr1[i];
// // }

// // var arr2 = [].concat(arr1);
// var arr2 = [...arr1];

// // Deep Copy
// // var arr2 = JSON.parse(JSON.stringify(arr1));

// arr2[0] = 1000;
// arr2[4][0] = 5000;

// console.log("Array 1", arr1);
// console.log("Array 2", arr2);


// ----------------------------------------------------------- Object Spread (ECMAScript 2018)

// var person1 = { id: 1, name: "Manish", address: { city: "Pune" } };

// // var person2 = person1;          // Reference Copy

// // Shallow Copy
// // var person2 = {};
// // for (let key in person1) {
// //     person2[key] = person1[key];
// // }

// // ECMAScript 2015 - Shallow Copy
// // var person2 = Object.assign({}, person1);

// // ECMAScript 2018 - Object Spread Operator
// var person2 = { ...person1 };

// // Deep Copy
// // var person2 = JSON.parse(JSON.stringify(person1));

// person2.name = "Abhijit";
// person2.address.city = "Mumbai";

// console.log("Person 1", person1);
// console.log("Person 2", person2);

// ---------------------------------------------------------- Array Destructuring & Rest

// var arr = [10, 20, 30, 40, 50, 60, 70, 80, 90];

// // Destructuring
// // var x = arr[0];
// // var y = arr[1];
// // var z = [arr[2], arr[3], arr[4], arr[5], arr[6], arr[7], arr[8]];

// // ES 6 - Array Destructuring
// // var [x, y, z] = arr;

// // ES 6 - Array Destructuring with Rest
// var [x, y, ...z] = arr;

// console.log(`x = ${x}, y = ${y}`);
// console.log(`z = ${z}`);

// -------------------------------------------------------- Object Destructuring With Rest (ECMAScript 2018)
var person = { id: 1, ename: "Manish", city: "Pune", state: "MH", pin: 411028, test: { id: 1 } };

// Destructuring
// var id = person.id;
// var ename = person.ename;
// var address = {
//     city: person.city,
//     state: person.state,
//     pin: person.pin
// };

// ECMAScript 2018 - Object Destructuring
// var { id, ename, address } = person;

// ECMAScript 2018 - Object Destructuring with Rest
var { id, ename, ...address } = person;

console.log("Id:", id);
console.log("Name:", ename);
console.log("Address:", address);