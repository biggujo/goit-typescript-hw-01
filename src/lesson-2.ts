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

