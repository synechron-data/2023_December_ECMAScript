// function getDataUsingCallback(callback) {
//     setTimeout(() => {
//         callback({ id: 1, name: 'John' });
//     }, 5000);
// }

// getDataUsingCallback((data) => {
//     console.log(data);
// });

function getDataUsingPromise() {
    var promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'John' });
            // reject("Some Error....");
        }, 5000);
    });

    return promise;
}

var promise = getDataUsingPromise();

// promise.then((data) => {
//     console.log("Success: ", data);
// }, (err) => {
//     console.error("Error: ", err);
// });

// promise.then((data) => {
//     console.log("Success: ", data);
// }).catch((err) => {
//     console.error("Error: ", err);
// });

promise.then((data) => {
    console.log("Success: ", data);
}).catch((err) => {
    console.error("Error: ", err);
}).finally(() => {
    console.warn("Finally will always run");
});