type Person = {
  name: string,
  age: number,
}

function findPerson(name: string): Person;
function findPerson(age: number): Person[];
function findPerson(query: string | number): Person | Person[] {
  if (typeof query === 'string') {
    return {
      name: 'Bob',
      age: 17,
    } as Person;
  }

  return [{
    name: 'Alice',
    age: 18,
  }, {
    name: 'Jack',
    age: 19,
  }] as Person[];
}

findPerson('Jack'); // => Person
findPerson(17); // => Person[]
