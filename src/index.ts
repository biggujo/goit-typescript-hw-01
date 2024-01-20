// * Basic types

// ! Explicit typing

let total: number = 100;
let userName: string = 'Bob';
let isActive: boolean = false;
let nullValue: null = null;
let undefinedValue: undefined = undefined;

// nullValue = 2;
// undefinedValue = 123123;
//
// userName = 5;

// ! Implicit typing

let implicit = 'h';
// implicit = 12;

let explicit: string = 'h';

// * Non-primitive types

// ! Array

const numbers: number[] = [1, 2, 3, 4, 5, 6];

// numbers.push('123');

// * type keyword

type User = {
  name: string,
  age: number
}

const user: User = {
  name: 'Bob',
  age: 17,
  // isActive: false,
};

// user.age = '15';
// user.name = 1;

// * Union type

type EventType = 'lesson' | 'deadline';

const homework: EventType = 'lesson';

type Size = 'small' | 'medium' | 'large';

const size: Size = 'large';

// * any

let a: any = 1;

a = 'Lorem';

// * unknown

let unknownName: unknown = 'Bob';
unknownName = 12;
// unknownName.toFixed(2);

// * Enums

enum Sizes {
  small = 'small',
  medium = 'medium',
  large = 'large',
}

// const size: Size = 'large';
const sizeEnumed: Sizes = Sizes.large;

// * Functions

const sum = (a: number, b: number): void => {
  console.log(a + b);
};

sum(2, 7);

type TestUser = {
  name: string,
}

const greet = (user: TestUser): void => {
  console.log(`Hello, ${user.name}!`);
};

greet({
  name: 'Jack',
});

type UserWithHobby = {
  name: string,
  age: number,
  hobby: string,
}

const createUser = (name: string, age: number, hobby: string): UserWithHobby => {
  return {
    name,
    age,
    hobby,
  };
};

const newUser = createUser('Jack', 18, 'skiing');

console.log(newUser);

// * Functions as a type

type Car = {
  color: string,
  price: number,
  currency: string,
  start: (color: string) => void
}

const car: Car = {
  color: 'red',
  price: 1200,
  currency: 'USD',
  start(color) {
    console.log('Start');
    console.log(color);
  },
};

// car.start(123);

// * Optional parameters

type Person = {
  name: string,
  age: number,
  role?: string,
}

const user1: Person = {
  name: 'Bob',
  age: 17,
};

const admin: Person = {
  name: 'Admin',
  age: 23,
  role: 'admin',
};

// * never

const infiniteLoop = (): never => {
  while (true) {
  }
  // throw new Error('Something wrong happened');
};
