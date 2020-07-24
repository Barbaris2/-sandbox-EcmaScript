const symbol = Symbol('demo');
const other = Symbol('demo');

console.log(symbol); //Symbol(demo)
console.log(other); //Symbol(demo)

console.log(symbol == other); // false

const obj = {
  name: 'Alex',
  [symbol]: 'meta'
};

console.log(obj[symbol]); // meta
console.log(obj[other]); // undefined

for (let key in obj) {
  console.log(key); // name, не видит символы
}
