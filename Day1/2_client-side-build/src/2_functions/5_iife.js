function hello() {
    console.log("Hello World 1");
}

hello();

// IIFE - Immediately Invoked Function Expression
(function () {
    console.log("Hello World 2");
})();

(function () {
    console.log("Hello World 3");
}());

(() => {
    console.log("Hello World 4 - Arrow");
})();

// // Error -  Unexpected token, expected "," 
// (() => {
//     console.log("Hello World 4 - Arrow");
// }());

// -------------------------------------------------

(function (name) {
    console.log(`Hello ${name}`);
})('Manish');

(function (name) {
    console.log(`Hello ${name}`);
}('Abhijeet'));

((name) => {
    console.log(`Hello ${name}`);
})('Ramakant');