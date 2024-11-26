'use strict'
// console.log("Hello from declarations.js file");

// a = 10;
// console.log("a is:", a);

// --------------------------------------------- After use strict

// var a = 10;                 // Local to the file

// // function test() {
// //     console.log("Inside test(), a is:", a);
// // }

// function test() {
//     var a = 20;             // Local to the function
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// --------------------------------------------- Hoisting
// Hoisting - Hoisting is JavaScript Runtime's default behavior of moving declarations to the top before execution

// a = 10;
// console.log("a is:", a);
// var a;

// Only declarations are hoisted, not initializations
// console.log("a is:", a);
// var a = 10;

// --------------------------------------------- Not Type Safe (Loosely Typed)
// var a = 10;
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// --------------------------------------------- Redeclaration
// You can create a variable with same name using var keyword
// Runtime will pick the nearest variable declaration/initilization

// var a = 10;
// var a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// ---------------------------------------------
// Only Global and Function Scope is supported when using var keyword

// Global to this module (file)
// var a = 10;

// function test() {
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// ---------------------------------------------
// var a = 10;

// function test() {
//     var a = 20;            // Local Variable (Function Scope)
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// ---------------------------------------------
// Block Scoping is not supported with var keyword
// var a = 10;

// function test() {
//     if (true) {
//         var a = 20;            // Local Variable (Function Scope)
//         console.log("Inside block(), a is:", a);
//     }
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// -----------------------

var i = "Hello";
console.log("Before, i is:", i);

// for (var i = 0; i < 10; i++) {
//     console.log("Inside for loop, i is:", i);
// }

// for (var _i = 0; _i < 10; _i++) {
//     console.log("Inside for loop, _i is:", _i);
// }

// function iterate() {
//     for (var i = 0; i < 10; i++) {
//         console.log("Inside for loop, i is:", i);
//     }
// }

// iterate();

// IIFE (Immediatly Invoked Function Expression)
(function () {
    for (var i = 0; i < 10; i++) {
        console.log("Inside for loop, i is:", i);
    }
})();

console.log("After, i is:", i);
