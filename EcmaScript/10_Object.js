const x = 10;
const y = 21;

//old
const point = {
  x: x,
  y: y,

  draw: function () {}
};

//new
const p = {
  x,
  y,
  draw() {}
};

//Динамическое вычисление ключей
const prefix = '_blah_';

const data = {
  [prefix + 'name']: 'Bob',
  [prefix + 'age']: 25
};

// Новая функция. Копирует свойства из одного объекта в другой
const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const options = {
  user: 'join',
  password: 'utopia'
};

Object.assign(defaults, options);
console.log(defaults);

const defaults2 = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const options2 = {
  user: 'join',
  password: 'utopia'
};

const res = Object.assign({}, defaults2, options2); // новый объект
console.log(res);

const person = {
  name: 'bob',
  friends: ['Mark', 'Jacob']
};

const shallowCopy = Object.assign({}, person);
person.friends.push('Jane');

console.log(shallowCopy);

console.log(Object.is(20, 20));

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.entries(obj)); // [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]
console.log(Object.keys(obj)); // [ 'a', 'b', 'c' ]
console.log(Object.values(obj)); // [ 1, 2, 3 ]

// New 2020

const person2 = {
  name: 'Alex',
  age: 30
};
console.log(Object.getOwnPropertyDescriptor(person2, 'age')); // { value: 30, writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptors(person2));
/* {
  name: {
    value: 'Alex',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: { value: 30, writable: true, enumerable: true, configurable: true }
} */

console.log(Object.entries(person2)); // [ [ 'name', 'Alex' ], [ 'age', 30 ] ]
console.log(
  Object.fromEntries([
    ['name', 'Alex'],
    ['age', 30]
  ])
); // { name: 'Alex', age: 30 }

console.log(Object.entries(['A', 'l', 'e', 'x']));
// [ [ '0', 'A' ], [ '1', 'l' ], [ '2', 'e' ], [ '3', 'x' ] ]

for (const [key, value] of Object.entries(person2)) {
  console.log(`${JSON.stringify(key)}: ${JSON.stringify(value)}`);
}
// "name": "Alex"
// "age": 30
