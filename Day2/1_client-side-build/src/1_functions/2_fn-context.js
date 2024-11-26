'use strict'

// // // In ES ‘this’ refers to the parent of the function and the object through which the function was called
// // function test1() {
// //     console.log(this);
// // }

// // test1();

// // const test2 = function () {
// //     console.log(this);
// // }

// // test2();

// // var p1 = {
// //     id: 1,
// //     test: function () {
// //         console.log(this);
// //     }
// // };

// // p1.test();
// // setTimeout(test1, 2000);
// // setTimeout(test2, 3000);
// // setTimeout(p1.test, 4000);

// console.log("Context of this file: ", this);
// var self = this;

// // In ES6, arrow functions use lexical scoping — ‘this’ refers to it’s current surrounding scope and no further.
// const test3 = () => {
//     console.log(this);
//     console.log(self === this);
// }

// test3();

// setTimeout(test3, 2000);

// ------------------------------------------------------------------------------ Switching Context
// var p1 = {
//     id: 1
// }

// // function check(x, y) {
// //     console.log(x, y);
// //     console.log(this);
// // }

// // const check = function (x, y) {
// //     console.log(x, y);
// //     console.log(this);
// // }

// // Arrow Fn Context cannot be changed, it is fixed
// const check = (x, y) => {
//     console.log(x, y);
//     console.log(this);
// }

// check(1, 2);
// check.call(p1, 2, 3);
// check.apply(p1, [20, 30]);

// const bindedToP1 = check.bind(p1);
// bindedToP1(3, 4);

// ------------------------------------------------------------------------------ Function Borrowing
// var p1 = {
//     id: 1,
//     name: "Manish",
//     toJson: function () {
//         console.log(JSON.stringify(this));
//     }
// };

// var p2 = {
//     id: 2,
//     name: "Rajesh",
//     city: "Bangalore",
//     toJson: function () {
//         console.log(JSON.stringify(this));
//     }
// };

// p1.toJson();
// p2.toJson();

// -------------------------
// const toJson = function () {
//     console.log(JSON.stringify(this));
// }

// var p1 = {
//     id: 1,
//     name: "Manish"
// };

// var p2 = {
//     id: 2,
//     name: "Rajesh",
//     city: "Bangalore"
// };

// // toJson.call(p1);
// // toJson.call(p2);

// p1.toJson = toJson.bind(p1);
// p2.toJson = toJson.bind(p2);

// p1.toJson();
// p2.toJson();

// ----------------------------------------------------------

var person = {
    age: 0,
    growOld: function () {
        console.log("growOld exceuted, under context:", this);
        this.age += 1;
    }
};

// console.log("person.age: ", person.age);

// person.growOld();
// console.log("person.age: ", person.age);

// person.growOld();
// console.log("person.age: ", person.age);

// person.growOld();
// console.log("person.age: ", person.age);

// --------------------------------------------

// var btn = document.createElement("button");
// btn.className = "btn btn-primary btn-block";
// btn.innerHTML = "Grow Old";

// var btnArea = document.getElementById("mDiv_btnArea");
// btnArea.appendChild(btn);

// btn.addEventListener("click", person.growOld);

// -------------------------------------------- Solution

var btn = document.createElement("button");
btn.className = "btn btn-primary btn-block";
btn.innerHTML = "Grow Old";

var btnArea = document.getElementById("mDiv_btnArea");
btnArea.appendChild(btn);

btn.addEventListener("click", person.growOld.bind(person));