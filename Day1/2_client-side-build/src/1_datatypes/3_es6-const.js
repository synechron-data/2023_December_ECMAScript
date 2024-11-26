// let a;
// console.log("a is:", a);

// // const env;                  // SyntaxError: Missing initializer in const declaration
// // console.log("env is:", env);

// const env = "dev";
// console.log("env is:", env);

// a = 20;
// console.log("a is:", a);

// // env = "prod";               // TypeError: Assignment to constant variable.
// // console.log("env is:", env);

// ----------------------------------------------- Redeclaration
// You cannot create a variable with same name in the same scope using const keyword

// const env = "dev";
// // const env = "prod";               // SyntaxError: Identifier 'env' has already been declared
// console.log("env is:", env);
// console.log("Type of env is:", typeof env);

// ----------------------------------------------------
// Const supports Block Scoping

// const env = "dev";
// console.log("Outside Block, env is:", env);

// if (true) {
//     const env = "prod";
//     console.log("Inside Block, env is:", env);
// }

// ----------------------------------------------------

const person = { id: 1, name: "Foo" };
console.log("person is:", person);

person.id = 1000;
person.name = "Bar";
console.log("person is:", person);

person.city = "Baz";
console.log("person is:", person);

delete person.id;
console.log("person is:", person);

// person = { id: 2, name: "Baz" };              // TypeError: Assignment to constant variable.
// console.log("person is:", person);