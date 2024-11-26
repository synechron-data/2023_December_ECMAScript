// When a language is not typesafe, what does it implies in terms of writing code?
// We cannot specify the type while declaring a variable
// We can provide any value to any variable
// We can use any operator with any operand (perform implicit type conversion (also known as type coercion))

// adding a number to a string in JavaScript will convert the number to a string and then concatenate them
// var result = 10 + "10";
// console.log("result is:", result);

// JavaScript automatically converts the boolean value true to a number in this context.
// var result = 10 * true;
// console.log("result is:", result);

// console.log(true && "abc");
// console.log(false && "abc");

// console.log(true ? "abc" : "xyz");
// console.log(false ? "abc" : "xyz");

// console.log(true && "abc" || "xyz");
// console.log(false && "abc" || "xyz");

// If isSelected(), returns true, I want to apply CSS class as text-info else text-danger

// Angular
{/* <h2 class={{isSelected() && "text-info" || "text-danger"}}>Hello</h2> */ }

// React
{/* <h2 className={isSelected() && "text-info" || "text-danger"}>Hello</h2> */ }

// var obj;
// var obj = undefined;
// var obj = null;
// // var obj = { id: 1 };

// // if ((obj === null) || (obj === undefined)) {
// //     console.error("obj is null or undefined");
// // } else {
// //     console.log("obj is not null or undefined, value is:", obj);
// // }

// if (!obj) {
//     console.error("obj is null or undefined");
// } else {
//     console.log("obj is not null or undefined, value is:", obj);
// }

// console.log(Boolean(""));
// console.log(Boolean("Manish"));
// // debugger;
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(-1));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean({ id: 1 }));

// -------------------------------------------------------- Compare
// let a = 10;
// let b = "10";

// console.log(typeof a);
// console.log(typeof b);

// console.log(a == b);        // Abstract Equality Comparison
// console.log(a === b);       // Strict Equality Comparison

let a = { id: 0 };
let b = { id: 0 };

console.log(a == b);        // Abstract Equality Comparison
console.log(a === b);       // Strict Equality Comparison

// Reference Copy
let c = b;
console.log(b == c);        // Abstract Equality Comparison
console.log(b === c);       // Strict Equality Comparison