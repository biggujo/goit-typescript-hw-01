// Partial<T> - makes all properties in T optional

// Задача 1: Уявімо, що у вас є форма редагування профілю користувача.
// Користувач може вибирати, які поля він хоче оновити.Створіть тип для такої форми на основі існуючого типу User.

type User = {
  name: string,
  age: number,
  email: string,
  address: string,
}

const updateUser = (user: User, updatePart: Partial<User>) => {
  return {
    ...user,
    updatePart,
  };
};

const user: User = {
  name: 'Tom',
  age: 21,
  email: 'test@example.com',
  address: 'Some St.',
};

const updatedUser = updateUser(user, {
  name: 'Tomas',
});

//   Задача 2: У вас є конфігураційний об'єкт з декількома полями.
// Створіть функцію, яка приймає часткові налаштування та повертає повний конфігураційний об'єкт.

type Configuration = {
  theme: string,
  locale: string,
  isStrict: boolean,
}

const updateConfiguration = (partialConfig: Partial<Configuration>) => {
  const defaultConfig: Configuration = {
    theme: 'light',
    locale: 'jp',
    isStrict: false,
  };

  return {
    ...defaultConfig,
    ...partialConfig,
  };
};

// Readonly<T> - makes all properties in T readonly

// Задача 1: Ви розробляєте функцію, яка приймає масив чисел і повертає його ж,
//   але ви хочете гарантувати, що функція не змінює вхідний масив.

const makeReadonlyArray = <T>(array: ReadonlyArray<T>): ReadonlyArray<T> => {
  return array;
};

const arr = [1, 2, 3];
const updatedArr = makeReadonlyArray<number>(arr);

// updatedArr.push('');

// Задача 2: Створіть об'єкт конфігурації, який не можна змінювати після його створення.

const createConfiguration = (config: Configuration): Readonly<Configuration> => {
  return {
    ...config,
  };
};

const readonlyConfig: Readonly<Configuration> = createConfiguration({
  theme: 'black',
  isStrict: true,
  locale: 'pl',
});

// 3. Pick<T, K> - creates a type from T with a union of keys K

// Задача 1: У вас є об'єкт користувача і вам потрібно створити функцію, яка повертає лише ім'я та електронну пошту користувача.

const pickUserNameEmail = (user: Pick<User, 'name' | 'email'>): Pick<User, 'name' | 'email'> => {
  return user;
};

const pickedUser = pickUserNameEmail(user);

// Задача 2: Ви хочете зберегти тільки певні поля з API-відповіді для відображення в UI.

type ApiResponse = {
  status: string,
  data: object,
  headers: object,
  date: number,
}

const pickApiResponseData = (response: Pick<ApiResponse, 'data'>): Pick<ApiResponse, 'data'> => {
  return response;
};

// 4. Omit<T, K> - constructs a type of T without a set of keys of union K

// Задача 1: У вас є тип користувача, але ви хочете створити новий тип без поля пароля для відправлення даних на клієнтську сторону.

type UserData = {
  email: string,
  password: string,
}

const sendUserDataWithoutEmail = (userData: Omit<UserData, 'password'>): Omit<UserData, 'password'> => {
  return userData;
};

//Задача 2: Ви хочете створити новий тип на основі API-відповіді, але без дати створення.

const getApiWithoutDate = (apiResponse: Omit<ApiResponse, 'date'>): Omit<ApiResponse, 'date'> => {
  return apiResponse;
};

// 5. Record<K, T> - constructs a type of the set of K keys and T values

// Задача 1: Ви хочете створити об'єкт, який мапить імена користувачів до їх віку.

type UserAges = Record<string, number>

type UserAgesImperative = {
  [age: string]: number
}

const userAges: UserAges = {
  Alex: 20,
  Sean: 19,
  John: 21,
};

// Задача 2: Мапа з іменами місяців до кількості днів у них.

type MonthDays = Record<string, number>

const monthDays: MonthDays = {
  January: 30,
  February: 28,
  March: 31,
  April: 30,
  // ...
};
