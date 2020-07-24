const fib = [1, 1, 2, 3, 5, 8, 13];

const [a, b, c] = fib;
const [, a, , b] = fib;
console.log(a, b);

const line = [
  [10, 17],
  [14, 7]
];
const [[p1, p2], [t1, t2]] = line;
console.log(p1, t1);

const people = ['chris', 'tom'];

const [a, b, c = 'noname'] = people;
console.log(a, b, c);

const people2 = ['chris', 'tom', 'Miha'];

const [a1, ...b1] = people2;
console.log(a1, b1);

const dict = {
  duck: 'quick',
  dog: 'wuff',
  mouse: 'squeck',
  hamster: 'squeck'
};

const res = Object.entries(dict).filter(arr => arr[1] === 'squeck');

const res = Object.entries(dict)
  .filter(([, value]) => value === 'squeck')
  .map(([key]) => key);

console.log(res);

const shape = {
  type: 'segment',
  coordinates: {
    start: [10, 15],
    end: [17, 15]
  }
};

const {
  coordinates: {
    start: [startX, startY],
    end: [endX, endY]
  }
} = shape;

console.log(startX, startY, endX, endY);
