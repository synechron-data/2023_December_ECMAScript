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

    [Symbol.iterator]() {
        let i = 0;
        const self = this;

        return {
            next() {
                const done = i >= self.items.length;
                const value = !done ? self.items[i++] : undefined;

                return {
                    value,
                    done
                };
            }
        };
    }
}

let ordersQueue = new Queue();
ordersQueue.enqueue("Order 1");
ordersQueue.enqueue("Order 2");
ordersQueue.enqueue("Order 3");

// console.log(ordersQueue.dequeue());
// console.log(ordersQueue.dequeue());
// console.log(ordersQueue.dequeue());

for (const order of ordersQueue) {
    console.log(order);
}


// class Queue<T> : IEnumerable<T> { }      - C#

// class Queue<T> implements Iterable<T> { } - Java
