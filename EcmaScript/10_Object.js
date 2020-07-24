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
