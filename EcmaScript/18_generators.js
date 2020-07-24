function* gen(num = 4) {
  for (let i = 0; i < num; i++) {
    yield i;
  }
}

const iter = gen(3);
console.log(iter.next()); // { value: 0, done: false }
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: undefined, done: true }

for (let i of gen(4)) {
  console.log(i); // 0 1 2 3
}
