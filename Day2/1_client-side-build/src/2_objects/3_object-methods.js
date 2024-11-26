// // ---------------------------------------------------- Object.assign (Shallow Copy)

// let source = { id: 1, name: "Manish", address: { city: "Pune" } };

// let target = Object.assign({}, source);

// target.name = "Abhijeet";
// target.address.city = "Mumbai";

// console.log(source);
// console.log(target);

// // ---------------------------------------------------- Object.create
// // Creates a new object, using an existing object as the prototype of the newly created object.

// let source = { id: 1, name: "Manish", address: { city: "Pune" } };

// let target1 = Object.assign({}, source);
// let target2 = Object.create(source);

// console.log("Source: ", source);
// console.log("Assign: ", target1);
// console.log("Create: ", target2);

// // ---------------------------------------------------
// // Add a New Property       - Allowed
// // Delete a Property        - Allowed
// // Modify Property Value    - Allowed

// let source = { id: 1, name: "Manish" };

// // Add a New Property
// source.city = "Pune";
// console.log(source);

// // Delete a Property
// delete source.name;
// console.log(source);

// // Modify Property Value
// source.id = 1000;
// console.log(source);

// // --------------------------------------
// // Add a New Property       - Not Allowed
// // Delete a Property        - Allowed
// // Modify Property Value    - Allowed

// let source = { id: 1, name: "Manish" };

// Object.preventExtensions(source);

// if (Object.isExtensible(source)) {
//     source.city = "Pune";
//     console.log(source);
// } else {
//     console.log("New properties can not be added to the object");
// }

// // Delete a Property
// delete source.name;
// console.log(source);

// // Modify Property Value
// source.id = 1000;
// console.log(source);

// // --------------------------------------
// // Add a New Property       - Not Allowed
// // Delete a Property        - Not Allowed
// // Modify Property Value    - Allowed

// let source = { id: 1, name: "Manish" };

// Object.seal(source);

// if (!Object.isSealed(source)) {
//     source.city = "Pune";
//     console.log(source);

//     delete source.name;
//     console.log(source);
// } else {
//     console.log("New properties can not be added and old properties can not be deleted on the object");
// }

// // Modify Property Value
// source.id = 1000;
// console.log(source);

// --------------------------------------
// Add a New Property       - Not Allowed
// Delete a Property        - Not Allowed
// Modify Property Value    - Not Allowed

let source = { id: 1, name: "Manish" };

Object.freeze(source);

if (!Object.isFrozen(source)) {
    source.city = "Pune";
    console.log(source);

    delete source.name;
    console.log(source);

    source.id = 1000;
    console.log(source);
} else {
    console.log("Object is freezed");
}

