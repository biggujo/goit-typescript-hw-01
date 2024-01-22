// * typeof

type CombinedType = string | number;

const sum = (a: CombinedType, b: CombinedType) => {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }

  return a + b;
};

// * in

type Employee = {
  name: string,
  position: string,
}

type Admin = {
  name: string,
  privileges: string[]
}

const printPerson = (person: Employee | Admin) => {
  console.log('Name', person.name);

  if ('position' in person) {
    console.log('Position', person.position);
  }

  if ('privileges' in person) {
    console.log('Privileges', person.privileges.join(', '));
  }
};

printPerson({
  name: 'abc',
  position: 'def',
});

// * instanceof

class Car {
  ride() {
    console.log('Riding...');
  }
}

class Truck extends Car {
  loadCargo() {
    console.log('Loading the cargo...');
  }
}

const runVehicle = (vehicle: Car | Truck) => {
  vehicle.ride();

  if (vehicle instanceof Truck) {
    vehicle.loadCargo();
  }
};

runVehicle(new Car());
runVehicle(new Truck());

// * User-Defined Type Guards

// @ts-ignore
type Employee = {
  name: string,
  position: string,
}

// @ts-ignore
type Admin = {
  name: string,
  privileges: string[]
}

const isEmployee = (person: Employee | Admin): person is Employee => {
  return 'position' in person;
};

const isAdmin = (person: Employee | Admin): person is Admin => {
  return (person as Admin).privileges !== undefined;
};

const greet = (person: Employee | Admin): void => {
  console.log(`Hello, ${person.name}`);

  if (isAdmin(person)) {
    console.log(`Your privileges: ${person.privileges.join(', ')}`);
  }

  if (isEmployee(person)) {
    console.log(`Your position: ${person.position}`);
  }
};

const somePerson: Employee = {
  name: 'Name',
  position: 'Position',
};

greet(somePerson);

// * type conversion

const unknownString: unknown = 'abc';

const num: number = (unknownString as string).length;
const num1: number = (<string>unknownString).length;
