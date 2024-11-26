// function add(x, y) {
//     return x + y;
// }

// function sub(x, y) {
//     return x - y;
// }

// // I want to log the arguments passed to the add and sub function
// // Where should we write the code?

// console.log(add(2, 3));
// console.log(sub(20, 3));

// // -------------------------------------------------

// function add(x, y) {
//     console.log(`add called with args, ${x}, ${y}`);
//     return x + y;
// }

// function sub(x, y) {
//     console.log(`sub called with args, ${x}, ${y}`);
//     return x - y;
// }

// console.log(add(2, 3));
// console.log(sub(20, 3));

// -------------------------------------------------

// function add(x, y) {
//     log(`add called with args, ${x}, ${y}`);
//     return x + y;
// }

// function sub(x, y) {
//     log(`sub called with args, ${x}, ${y}`);
//     return x - y;
// }

// function log(message) {
//     console.log(message);
// }

// console.log(add(2, 3));
// console.log(sub(20, 3));

// ------------------------------------------------- HOF

function add(x, y) {
    return x + y;
}

function sub(x, y) {
    return x - y;
}

function logDecorator(fn) {
    return function (...args) {
        console.log(`${fn.name} called with args, ${args.join(", ")}`);
        return fn.call(this, ...args);
    }
}

var addWithLogger = logDecorator(add);
var subWithLogger = logDecorator(sub);

console.log(addWithLogger(2, 3));
console.log(subWithLogger(20, 3));
