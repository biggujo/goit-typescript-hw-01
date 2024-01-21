// * Primitive and non-primitive

const user2: { name: string } = {
  name: 'asd',
};

// * type

type User = {
  name: string,
  age: number,
}

const testUser1: User = {
  name: 'John',
  age: 17,
};

// * unknown

let num: number = 3;

let unknownVar: unknown = 'a';
unknownVar = 2;
(unknownVar as number).toFixed(2);

// num = unknownVar;

// * Tuples

const someTuple: [x: number, y: number] = [1, 2];

// someTuple.push('a');

console.log(someTuple[0]);
console.log(someTuple[1]);

// * Enumeration

const enum Role {
  ADMIN = 'admin',
  USER = 'user',
}

const role = Role.ADMIN;

// * Union types

let a: number | string = 1;

// a = false;

// * void

const test = (): undefined => {

};

// * Function type

type CallbackFunc = (a: string) => void;

const testCallback: CallbackFunc = (b: string) => {
  return;
};
