// function greetings(message, name) {
//     console.log(message + ", " + name);
// }

// greetings("Good Morning", "Manish");
// greetings("Good Morning", "Ramakant");
// greetings("Good Morning", "Abhijeet");


// function Converter(toUnit, factor, offset, input) {
//     return [((offset + input) * factor).toFixed(2), toUnit].join("");
// }

// console.log(Converter(" INR", 83.22, 0, 100));
// console.log(Converter(" INR", 83.22, 0, 250));
// console.log(Converter(" INR", 83.22, 0, 699));
// console.log(Converter(" INR", 83.22, 0, 999));

// ------------------------------------------------------------- Currying

// function greetings(message) {
//     return function (name) {
//         console.log(message + ", " + name);
//     }
// }

// const mGreet = greetings("Good Morning");
// mGreet("Manish");
// mGreet("Ramakant");
// mGreet("Abhijeet");

// const eGreet = greetings("Good Evening");
// eGreet("Manish");
// eGreet("Ramakant");
// eGreet("Abhijeet");

function Converter(toUnit, factor, offset) {
    return function (input) {
        return [((offset + input) * factor).toFixed(2), toUnit].join("");
    }
}

const usdToInrConverter = Converter(" INR", 83.22, 0);
console.log(usdToInrConverter(100));
console.log(usdToInrConverter(250));
console.log(usdToInrConverter(699));
console.log(usdToInrConverter(999));

const milesToKmConverter = Converter(" KM", 1.60934, 0);
console.log(milesToKmConverter(100));
console.log(milesToKmConverter(250));
console.log(milesToKmConverter(699));
console.log(milesToKmConverter(999));