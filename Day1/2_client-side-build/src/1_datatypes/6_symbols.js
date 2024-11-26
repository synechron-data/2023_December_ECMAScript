// Create a function, which should compare and give true, only if, color const is passed to it as an argument

// ------------------------------------------------------------------- Primitive Type (Immutable)

// const color = "red";

// function isRedColor(arg) {
//     console.log(arg === color);
// }

// isRedColor(color);

// isRedColor("red");

// var clr = "red";
// isRedColor(clr);

// ------------------------------------------------------------------- Object Types (Mutable)

// const color = { code: "red" };

// function isRedColor(arg) {
//     console.log(arg === color);
// }

// isRedColor(color);

// isRedColor({ code: "red" });

// var clr = { code: "red" };
// isRedColor(clr);

// ------------------------------------------------------------------- Primitive Type (Immutable) - Symbol
// Unique Immutable Type (Symbol)

const color = Symbol("red");

function isRedColor(arg) {
    console.log(arg === color);
}

isRedColor(color);

isRedColor(Symbol("red"));

var clr = Symbol("red");
isRedColor(clr);
