"use strict";
// * Basic types
// ! Explicit typing
let total = 100;
let userName = 'Bob';
let isActive = false;
let nullValue = null;
let undefinedValue = undefined;
// nullValue = 2;
// undefinedValue = 123123;
//
// userName = 5;
// ! Implicit typing
let implicit = 'h';
// implicit = 12;
let explicit = 'h';
// * Non-primitive types
// ! Array
const numbers = [1, 2, 3, 4, 5, 6];
const user = {
    name: 'Bob',
    age: 17,
    // isActive: false,
};
const homework = 'lesson';
const size = 'large';
// * any
let a = 1;
a = 'Lorem';
// * unknown
let unknownName = 'Bob';
unknownName = 12;
// unknownName.toFixed(2);
// * Enums
var Sizes;
(function (Sizes) {
    Sizes["small"] = "small";
    Sizes["medium"] = "medium";
    Sizes["large"] = "large";
})(Sizes || (Sizes = {}));
// const size: Size = 'large';
const sizeEnumed = Sizes.large;
// * Functions
const sum = (a, b) => {
    console.log(a + b);
};
sum(2, 7);
const greet = (user) => {
    console.log(`Hello, ${user.name}!`);
};
greet({
    name: 'Jack',
});
const createUser = (name, age, hobby) => {
    return {
        name,
        age,
        hobby,
    };
};
const newUser = createUser('Jack', 18, 'skiing');
console.log(newUser);
const car = {
    color: 'red',
    price: 1200,
    currency: 'USD',
    start(color) {
        console.log('Start');
        console.log(color);
    },
};
const user1 = {
    name: 'Bob',
    age: 17,
};
const admin = {
    name: 'Admin',
    age: 23,
    role: 'admin',
};
