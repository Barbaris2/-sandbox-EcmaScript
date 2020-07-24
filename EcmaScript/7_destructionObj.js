const person = {
  firstName: 'Peter',
  lastName: 'Smith',
  age: 27
};

//old
const firstName = person.firstName;
const lastName = person.lastName;

//New
const { firstName, lastName } = person;
console.log(firstName, lastName);

const person2 = {
  name: {
    first: 'Den',
    last: 'Mark'
  },
  age: 27,
  role: 'admin'
};

const {
  name: { first: firstName, last: lastName }
} = person2;
console.log(firstName, lastName);

const { role = 'user' } = person2;
console.log(role);

const { city: { street = 'Lenina' } = {} } = person2;
console.log(street);

function connect({ host = 'localhost', port = 18, user = 'denr' }) {
  console.log('user:', user, 'port:', port, 'host:', host);
}

connect({
  host: 'localhost',
  port: 1829,
  user: 'peter'
});

const dict = {
  duck: 'quack',
  dog: 'wuff',
  mouse: 'peak'
};

const { duck, ...otherAnimal } = dict;
console.log(otherAnimal);
