//ES2018
//Spread оператор работает точно также как и Object

const defaults = {
  host: 'localhost',
  dbName: 'blog',
  user: 'admin'
};

const options = {
  user: 'join',
  password: 'utopia'
};

const res = Object.assign({}, defaults, options);

const result = { ...defaults, ...options };

console.log(res);
console.log(result);

const port = 8080;
const result2 = {
  ...defaults,
  ...options,
  port,
  connect() {}
};
console.log(result2);
