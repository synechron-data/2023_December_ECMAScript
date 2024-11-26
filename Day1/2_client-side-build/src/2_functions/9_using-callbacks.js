// --------------------------------------------------------------- Use Return keyword to Return data from the function (Sync Logic) - Pull
// Dev 1
function getString() {
    const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];
    var str = strArr[Math.floor(Math.random() * strArr.length)];
    return str;
}

// Dev 2
// var s = getString();
// console.log(s);

// setInterval(() => {
//     var s = getString();
//     console.log(s);
// }, 2000);

// What will happen if getString Takes inderterministic time to execute
// Call 1 - 1000
// Call 2 - 3000
// Call 3 - 1000

// --------------------------------------------------------------- When you want to return data from the function, but it takes time to execute (Async Logic) - Push

// function pushString(cb) {
//     const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];

//     setInterval(() => {
//         var str = strArr[Math.floor(Math.random() * strArr.length)];
//         cb(str);
//     }, 2000);
// }

// pushString(function(s){
//     console.log(s);
// });

// pushString(function (s) {
//     console.log("S1 - " + s);
// });

// pushString(function (s) {
//     console.log("S2 - " + s);
// });

// pushString((s) => {
//     console.log("S1 - " + s);
// });

// pushString((s) => {
//     console.log("S2 - " + s);
// });

function pushString(cb) {
    const strArr = ["NodeJS", "ReactJS", "Angular", "ExtJS", "jQuery"];

    function scheduleNext() {
        var str = strArr[Math.floor(Math.random() * strArr.length)];
        var randomInterval = Math.floor(Math.random() * 5000) + 1000; // Random interval between 1s and 5s
        setTimeout(scheduleNext, randomInterval);
        cb(str, randomInterval);
    }

    scheduleNext(); // Start the process
}

pushString((s, time) => {
    console.log(`${s} recieved, Next string in ${time} ms`);
});