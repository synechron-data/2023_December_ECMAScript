// // // var employees = new Array();
// // var employees = new Array(2);

// // // employees.push("Manish");
// // // employees.push("Ramesh");
// // // employees.push("Suresh");

// // // employees.unshift("Manish");
// // // employees.unshift("Ramesh");
// // // employees.unshift("Suresh");

// // employees[0] = "Manish";
// // // employees[1] = "Ramesh";
// // employees.splice(1, 1, "Abhijeet");
// // employees.push("Ramakant");

// // var employees = new Array("Manish", "Ramesh", "Suresh");
// // var employees = ["Manish", "Ramesh", "Suresh"];

// // var employees = new Array("Manish");
// // var employees = new Array(10);
// // var employees = Array.of(10);

// var arr = ["Manish", "Ramesh", "Suresh"];
// // var employees = new Array(arr);
// // var employees = Array.from(arr);
// var employees = [...arr];

// console.log(employees);
// console.log(typeof employees);
// console.log(employees instanceof Array);
// console.log(employees.length);

// ------------------------------------------------------- Iterate
var employees = [
    { id: 1, name: "Manish" },
    { id: 2, name: "Varun" },
    { id: 3, name: "Paresh" },
    { id: 4, name: "Devesh" },
    { id: 5, name: "Atul" },
    { id: 6, name: "Abhishek" }
];

// delete employees[2];

// for (let i = 0; i < employees.length; i++) {
//     console.log(`${i}        ${JSON.stringify(employees[i])}`);
// }

// for (const i in employees) {
//     console.log(`${i}        ${JSON.stringify(employees[i])}`);
// }

// employees.forEach((employee, index) => {
//     console.log(`${index}        ${JSON.stringify(employee)}`);
// });

// ECMASCRIPT 2015 - for-of loop
// for (const employee of employees) {
//     console.log(`${JSON.stringify(employee)}`);
// }

// for (const pair of employees.entries()) {
//     console.log(`${JSON.stringify(pair)}`);
// }

// for (const [index, item] of employees.entries()) {
//     console.log(`${index}        ${JSON.stringify(item)}`);
// }

// ----------------------------------------------------------------

// Create a new Array with all the Names in uppercase from employees Array (Transformation)

var names = employees.map(employee => employee.name.toUpperCase());
console.log(names);

// Create a new Array with all the Ids from employees Array (Transformation)
var ids = employees.map(employee => employee.id);
console.log(ids);

// Write a code which will add all numbers in the ids array (Sum of all ids)
var sum = ids.reduce((prev, curr) => prev + curr);
console.log(sum);