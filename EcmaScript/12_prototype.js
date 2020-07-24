// Withhout prototype
const dog = {
  name: 'dog',
  voice: 'woof',
  say: function () {
    console.log(this.name, 'goes', this.voice);
  }
};

const cat = {
  name: 'cat',
  voice: 'meow',
  say: function () {
    console.log(this.name, 'goes', this.voice);
  }
};

// ->
const animal = {
  say: function () {
    console.log(this.name, 'goes', this.voice);
  }
};

// Object.setPrototypeOf очень медленный метод и его лучше не использовать
const dog = {
  name: 'dog',
  voice: 'woof'
};
Object.setPrototypeOf(dog, animal);

const cat = {
  name: 'cat',
  voice: 'meow'
};
Object.setPrototypeOf(cat, animal);

//->
const dog = Object.create(animal);

dog.name = 'Dog';
dog.voice = 'woof';

dog.say();

//Функция конструктор
function createAnimal(name, voice) {
  const result = Object.create(animal);
  result.name = name;
  result.voice = voice;
  return result;
}

const dog = createAnimal('Dog', 'woof');
dog.say();

//->
function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function () {
  console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('Dog', 'woof');
dog.say();
