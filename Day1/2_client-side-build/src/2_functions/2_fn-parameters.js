'use strict'
// Function Creation
// function <FunctionName>(<Parameters>) {
//     <Function Body>
// }

// Function Call
// <FunctionName>(<Arguments>)

// function hello(person_name) {
//     console.log(`Hello, ${person_name}`);
// }

// hello('Manish');
// hello(10);
// hello();
// hello('Synechron', 'Sharma');

// --------------------------------------- Handle Less number of Arguments & Type
// Function to add 2 numbers

// function add(a, b) {
//     // a = a || 0;
//     // b = b || 0;

//     if (a === void 0) a = 0;
//     if (b === void 0) b = 0;

//     if ((typeof a !== 'number') || (typeof b !== 'number')) {
//         throw new Error('Invalid Arguments');
//     }

//     return a + b;
// }

// -------------- ECMAScript 2015 - Default Parameters
// function add(a = 0, b = 0) {
//     if ((typeof a !== 'number') || (typeof b !== 'number')) {
//         throw new Error('Invalid Arguments');
//     }

//     return a + b;
// }

// console.log(add(2, 3));
// console.log(add(2));
// console.log(add());

// try {
//     console.log(add(2, "abc"));
// } catch (e) {
//     console.error(e.message);
// }

// --------------------------------------- Handle Extra number of Arguments

// function hello(person_name) {
//     console.log(`Hello, ${person_name}`);
//     console.log(arguments);
// }

// ECMASCRIPT 2015 - Rest Parameters - (Converts comma seperated items to an array)
// function hello(person_name, ...args) {
//     console.log(`Hello, ${person_name}`);
//     console.log(args);
// }

// hello("Manish");
// hello("Manish", "Sharma");
// hello("Manish", "Sharma", "Pune");
// hello("Manish", "Sharma", "Pune", 411021);

// --------------------------------------- Variable Arguments
function average(...numbers) {
    // console.log(numbers);
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }

    if (numbers.length === 0)
        return sum;
    else
        return sum / numbers.length;
}

console.log(average());
console.log(average(1));
console.log(average(1, 2));
console.log(average(1, 2, 3, 4, 5));
console.log(average(1, 2, 3, 4, 5, 6, 7, 8, 9));

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(average(...arr));           // Array Spread Operator (ES6)

// ... used at the time of fn creatio (in Fn Parameters) - Rest Parameter
// ... used at the time of fn call (in arguments) - Spread Operator

// Rest - Combine to Array
// Spread - Split to Individual Items

// If we use, ... operator, on the lefthand side of assignment operator - Rest
// If we use, ... operator, on the righthand side of assignment operator - Spread