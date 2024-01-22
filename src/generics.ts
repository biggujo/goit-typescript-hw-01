// * Basic generics

// ! Simple array

function getFirstElement<TArrayType>(array: TArrayType[]) {
  return array[0];
}

const numbers = [1, 2, 3];
const firstNumber = getFirstElement<number>(numbers);

const strings = ['a', 'b', 'c'];
const firstString = getFirstElement<string>(strings);

// ! Map

const map = new Map<number, number>([
  [1, 2],
  [3, 4],
]);

// ! API response

type ApiResponse<ResponseType extends object> = {
  data: ResponseType,
  isError: boolean,
}

type DataResponse = ApiResponse<{
  title: string,
}>

const dataResponse: DataResponse = {
  data: {
    title: 'Lorem ipsum',
  },
  isError: false,
};

// ! Promise

const response = new Promise<number>((resolve, reject) => {
  resolve(2);
});

// ! Objects merge

type Person = {
  name: string,
}

type AdditionalPerson = {
  age: number,
}

const merge = <T extends object, K extends object>(objA: T, objB: K) => {
  return Object.assign(objA, objB);
};

let person: Person = {
  name: 'Jack',
};

const additionalInfo: AdditionalPerson = {
  age: 17,
};

person = merge(person, additionalInfo);
