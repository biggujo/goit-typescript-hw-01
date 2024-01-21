"use strict";
// * Primitive and non-primitive
const user2 = {
    name: 'asd',
};
const testUser1 = {
    name: 'John',
    age: 17,
};
// * unknown
let num = 3;
let unknownVar = 'a';
unknownVar = 2;
unknownVar.toFixed(2);
// num = unknownVar;
// * Tuples
const someTuple = [1, 2];
// someTuple.push('a');
console.log(someTuple[0]);
console.log(someTuple[1]);
const role = "admin" /* Role.ADMIN */;
// * Union types
let a = 1;
// a = false;
// * void
const test = () => {
};
const testCallback = (b) => {
    return;
};
