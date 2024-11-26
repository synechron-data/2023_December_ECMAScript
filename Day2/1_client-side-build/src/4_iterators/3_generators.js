// // Eager Executed
// function idNormal() {
//     console.log("Hello from idNormal Function");
// }

// // Lazy Executed
// function* idGenerator() {
//     console.log("Hello from idGenerator Function");
// }

// idNormal();
// idGenerator();

// --------------------------

// function* idGenerator() {
//     console.log("Hello from idGenerator Function");
// }

// let seq = idGenerator();
// console.log(seq.__proto__);
// // console.log(seq.next());

// --------------------------

// function* idGenerator() {
//     console.log("First Line of idGenerator Function");
//     yield 1;
//     console.log("After First Yield");
//     yield 2;
//     console.log("After Second Yield");
//     yield 3;
//     console.log("After Third Yield");
//     console.log("Last Line of idGenerator Function");
// }

// let seq = idGenerator();
// console.log(seq.next());
// console.warn("Pause One");
// console.log(seq.next());
// console.warn("Pause Two");
// console.log(seq.next());
// console.warn("Pause Three");
// console.log(seq.next());

// // console.log("\n");
// // for (const id of idGenerator()) {
// //     console.log(id);
// // }

// -------------------------------------------

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.push(item);
    }

    dequeue() {
        return this.items.shift();
    }

    // *[Symbol.iterator]() {
    //     for (let i = 0; i < this.items.length; i++) {
    //         yield this.items[i];
    //     }
    // }

    *[Symbol.iterator]() {
        yield* this.items;
    }
}

let ordersQueue = new Queue();
ordersQueue.enqueue("Order 1");
ordersQueue.enqueue("Order 2");
ordersQueue.enqueue("Order 3");

for (const order of ordersQueue) {
    console.log(order);
}