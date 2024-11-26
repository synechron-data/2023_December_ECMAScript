// // Case 1 - Default Import
// // import square from './lib';
// // console.log("Square: ", square(5));

// // import sqr from './lib';
// // console.log("Square: ", sqr(5));

// import * as l from './lib';
// console.log("Square: ", l.default(5));

// Case 2 - Named Import
// import { square } from './lib';
// console.log("Square: ", square(5));

// import { square as sqr } from './lib';
// console.log("Square: ", sqr(5));

// import * as l from './lib';
// console.log("Square: ", l.square(5));

// Case 3 - Multiple Import
// import square, { check, test } from './lib';
// console.log("Square: ", square(5));
// console.log("Check: ", check(20));
// console.log("Test: ", test(20));

// import sqr, { check as chk, test as tst } from './lib';
// console.log("Square: ", sqr(5));
// console.log("Check: ", chk(20));
// console.log("Test: ", tst(20));

import { Queue } from "./lib";

let ordersQueue = new Queue();
ordersQueue.enqueue("Order 1");
ordersQueue.enqueue("Order 2");
ordersQueue.enqueue("Order 3");

for (const order of ordersQueue) {
    console.log(order);
}