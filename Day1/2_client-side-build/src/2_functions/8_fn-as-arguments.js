var employees = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Neeraj", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" }
];

// ----------------

// var pune_employees = [];

// for (var i = 0; i < employees.length; i++) {
//     if (employees[i].city === "Pune") {
//         pune_employees.push(employees[i]);
//     }
// }

// console.log(pune_employees);

// ----------------

// var pune_employees = [];

// function filterLogic(item) {
//     return item.city === "Pune";
// }

// for (var i = 0; i < employees.length; i++) {
//     if (filterLogic(employees[i])) {
//         pune_employees.push(employees[i]);
//     }
// }

// console.log(pune_employees);

// ----------------

// function filterLogic(item) {
//     return item.city === "Pune";
// }

// var pune_employees = employees.filter(filterLogic);

// console.log(pune_employees);

// ----------------

// var pune_employees = employees.filter(function (item) {
//     return item.city === "Pune";
// });

// console.log(pune_employees);

// ----------------

// var pune_employees = employees.filter((item) => {
//     return item.city === "Pune";
// });

// console.log(pune_employees);

// ----------------

var pune_employees = employees.filter(item => item.city === "Pune");
console.log(pune_employees);