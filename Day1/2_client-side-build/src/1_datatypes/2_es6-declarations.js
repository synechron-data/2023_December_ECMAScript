'use strict'

// let a = 10;
// console.log("a is:", a);

// --------------------------------------- Hoisting
// Hoisting - Hoisting is not supported

// a = 10;
// console.log("a is:", a);
// let a;

// --------------------------------------------- Not Type Safe (Loosely Typed)
// let a = 10;
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// a = "Hello";
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// --------------------------------------------- Redeclaration
// You cannot create a variable with same name using let keyword, in same scope

// let a = 10;
// let a = "Hello";                // SyntaxError: Identifier 'a' has already been declared
// console.log("a is:", a);
// console.log("Type of a is:", typeof a);

// ---------------------------------------------
// ECMASCRIPT 2015, with let keyword we get
// Global Scope
// Function (Local) Scope
// Block Scope

// ---------------------------------------------
// var a = 10;

// function test() {
//     if (true) {
//         let a = 20;            // Local Variable (Function Scope)
//         console.log("Inside block(), a is:", a);
//     }
//     console.log("Inside test(), a is:", a);
// }

// test();
// console.log("Outside test(), a is:", a);

// -------------------
var i = "Hello";
console.log("Before, i is:", i);

for (let i = 0; i < 10; i++) {
    console.log("Inside for loop, i is:", i);
}

console.log("After, i is:", i);