//Arrow function

function square(x) {
  return x * x;
}

const sq = x => x * x;

const arr = ['1', '2', '3', '4'];

const sum = (a, b) => {
  return a + b;
};

console.log(sum(2, 5));

const res = arr
  .map(el => parseInt(el))
  .filter(num => num % 2)
  .reduce((max, value) => Math.max(max, value), 0);
console.log(res);

const res2 = arr
  .map(function (el) {
    return parseInt(el);
  })
  .filter(function (num) {
    return num % 2;
  })
  .reduce(function (max, value) {
    return Math.max(max, value);
  }, 0);
console.log(res2);

const greeter = {
  greet: function (name) {
    console.log('Hello ', name);
  },

  greetAll: function (names) {
    names.forEach(name => {
      this.greet(name);
    });
  }
};

// Context
function log() {
  console.log(this);
}

const arrowLog = () => console.log(this);

const person = {
  name: 'Alex',
  log,
  arrowLog
};

person.log(); // { name: 'Alex', log: [Function: log], arrowLog: [Function: arrowLog] }
person.arrowLog(); //{}

/* стрелочные функции не имеют prototype */
