// function hello() {
//     console.log("Hello World!");
// }

// // SyntaxError:  Identifier 'hello' has already been declared.
// function hello(name) {
//     console.log(`Hello ${name}`);
// }

// hello();
// hello('Manish');

// // ----------------------------------------------------

// function m1() {
//     console.log("Hello World!");
// }

// function m2(name) {
//     console.log(`Hello ${name}`);
// }

// function hello() {
//     if(arguments.length === 0) {
//         m1();
//     } else if(arguments.length === 1) {
//         m2(arguments[0]);
//     } else {
//         throw new Error('Invalid Arguments');
//     }
// }

// hello();
// hello('Manish');

// m1();
// m2("Manish");

// ----------------------------------------------------
// function hello() {
//     function m1() {
//         console.log("Hello World!");
//     }

//     function m2(name) {
//         console.log(`Hello ${name}`);
//     }

//     if(arguments.length === 0) {
//         m1();
//     } else if(arguments.length === 1) {
//         m2(arguments[0]);
//     } else {
//         throw new Error('Invalid Arguments');
//     }
// }

// hello();
// hello('Manish');

// ----------------------------------------------------
// const hello = (function () {
//     function m1() {
//         console.log("Hello World!");
//     }

//     function m2(name) {
//         console.log(`Hello ${name}`);
//     }

//     return function () {
//         if (arguments.length === 0) {
//             m1();
//         } else if (arguments.length === 1) {
//             m2(arguments[0]);
//         } else {
//             throw new Error('Invalid Arguments');
//         }
//     }
// })();

// hello();
// hello('Manish');

// ----------------------------------------------------
function hello(...args) {
    if (args.length === 0) {
        console.log("Hello World!");
    } else if (args.length === 1) {
        console.log(`Hello ${args[0]}`);
    } else {
        throw new Error('Invalid Arguments');
    }
}

hello();
hello('Manish');