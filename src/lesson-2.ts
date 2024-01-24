// * Index properties

type Goods = {
  [name: string]: number;
}

const fruits: Goods = {
  apples: 10,
  bananas: 12,
};

const tech: Goods = {
  pcs: 3,
  phones: 5,
};

type NumberOrStringDict = {
  [key: string]: string | number;
}

const testNOSD: NumberOrStringDict = {
  test: 1,
  testNum: 2,
  testStr: 'str',
};

// * Generics

// * Basics

const reverse = <T>(array: T[]): T[] => {
  return array.reverse();
};

const reversed1 = reverse<number>([1, 2, 3]);
const reversed2 = reverse<string>(['a', 'b', 'c']);

// * extends

const getDuration = <T extends { duration: number }>(obj: T): number => {
  return obj.duration;
};

console.log(getDuration({
  name: 'Earth',
  duration: 120,
}));

const getProperty = <T extends {}, U extends keyof T>(obj: T, key: U): T[U] => {
  return obj[key];
};

const student = {
  name: 'Jack',
  age: 17,
};

getProperty(student, 'age');

// * Utility types

// * Partial<T>

type Todo = {
  title: string,
  isCompleted: boolean,
}

const updateTodo = (todo: Todo, changePart: Partial<Todo>): Todo => {
  return { ...todo, ...changePart };
};

const todo1: Todo = {
  title: 'Lorem ipsum',
  isCompleted: true,
};

const updatedTodo1 = updateTodo(todo1, { isCompleted: false });

// * Readonly<T>

type User = {
  name: string,
  age: number,
}

const user2: Readonly<User> = {
  name: 'John',
  age: 17,
};

user2.age = 12;

const readonlyArray1: ReadonlyArray<number> = [1, 2, 3];

// * Pick<T, K>
// * Omit<T, K>

type Person = {
  name: string,
  address: string,
  age: number,
}

type PersonPick = Pick<Person, 'name'>;

type PersonOmit = Omit<Person, 'address'>

// * Record<T, K>

type Database = Record<string, number>

const cityDatabase: Database = {
  Kyiv: 200000,
  Kharkiv: 1212323,
};

cityDatabase['Lviv'] = 332323;
