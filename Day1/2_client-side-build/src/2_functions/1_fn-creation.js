// Function Declaration Syntax - Is Hoisted
function hello1() {
    console.log("Hello One from Function Declaration");
}

// Function Expression Syntax - Is Not Hoisted
const hello2 = function () {
    console.log("Hello Two from Function Expression");
}

// Function Constructor Syntax - Is Not Hoisted
const hello3 = new Function('console.log("Hello Three from Function Constructor")');

// Arrow Function Syntax - Is Not Hoisted
const hello4 = () => {
    console.log("Hello Four from Arrow Function");
}

hello1();
hello2();
hello3();
hello4();

// -------------------------------------------------------

// var i = 10;
// console.log("i is:", i);
// console.log("Type of i is:", typeof i);

// // Function Reference
// var f = function() {
//     console.log("Hello");
// };
// console.log("f is:", f);
// console.log("Type of f is:", typeof f);

// Function is a type, which can refer to a block of code (Function Pointers / Delegates)

// Can we create a variable of type number?
// If yes; We should be able to create a variable of type function as well.

// Can we create a variable of type number inside a function?
// If yes; We should be able to create a variable of type function inside a function as well. (Nested Functions)
// function f1() {
//     function f2() {
//     }
// }

// Can we return a variable of type number from a function?
// If yes; We should be able to return a variable of type function from a function as well. (Closure/Currying/Higher Order Functions)
// function f1() {
//     function f2() {
//     }
//     return f2;
// }

// Can we pass a variable of type number to a function?
// If yes; We should be able to pass a variable of type function to a function as well. (Callbacks)
// document.getElementById('btn').addEventListener('click', function() {});