let nameSymbol = Symbol("name");

let person = {
    id: 1,
    [nameSymbol]: "Manish"
};

console.log(Object.getOwnPropertyNames(person));
console.log(Object.getOwnPropertySymbols(person));

var arr = new Array();
console.log(Object.getOwnPropertyNames(arr));
console.log(Object.getOwnPropertySymbols(arr));
console.log(Object.getOwnPropertySymbols(Array.prototype));
