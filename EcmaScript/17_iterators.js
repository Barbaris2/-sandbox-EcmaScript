const array = [10, 20, 30, 40];
const str = 'hello';

const iterArr = array[Symbol.iterator]();
console.log(iterArr); // Object [Array Iterator] {}

console.log(iterArr.next()); // { value: 10, done: false }
console.log(iterArr.next()); // { value: 20, done: false }
console.log(iterArr.next()); // { value: 30, done: false }
console.log(iterArr.next()); // { value: 40, done: false }
console.log(iterArr.next()); // { value: undefined, done: true }

const iterStr = str[Symbol.iterator]();
console.log(iterStr); // Object [Array Iterator] {}

console.log(iterStr.next()); // { value: h, done: false }
console.log(iterStr.next()); // { value: e, done: false }
console.log(iterStr.next()); // { value: l, done: false }
console.log(iterStr.next()); // { value: l, done: false }
console.log(iterStr.next()); // { value: o, done: true }
console.log(iterStr.next()); // { value: undefined, done: true }

for (let item of array) {
  console.log(item); // 10 20 30 40
}

for (let item of str) {
  console.log(item); // h e l l o
}
