function Animal(name, voice) {
  this.name = name;
  this.voice = voice;
}

Animal.prototype.say = function () {
  console.log(this.name, 'goes', this.voice);
};

const dog = new Animal('Dog', 'woof');
dog.say();

// duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
class Animal2 {
  constructor(name, voice) {
    this.name = name;
    this.voice = voice;
  }

  say() {
    console.log(this.name, 'goes', this.voice);
  }
}

class Bird extends Animal2 {
  constructor(name, voice, canFly) {
    super(name, voice);
    super.say();
    this.canFly = canFly;
  }

  say() {
    console.log('Birds do not like to talk');
  }
}

const duck = new Bird('Duck', 'quack', true);
duck.say();

// new 2020

class Person {
  static #area = 'Earth';
  name = 'unknown name';
  #year = 1990;

  static printAera() {
    return Person.#area === 'Earth' ? 'Земля' : 'Марс';
  }

  get age() {
    return new Date().getFullYear() - this.#year;
  }

  set age(age) {
    if (age > 0) {
      this.#year = new Date().getFullYear() - age;
    }
  }
}

const person = new Person();
console.log(person.name);
// console.log(person.#year); // Errror private field
console.log(person.age);
person.age = 18;
console.log(person.age);
console.log(Person.printAera());
