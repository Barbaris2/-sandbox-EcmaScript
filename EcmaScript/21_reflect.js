// Reflect - это встроенный объект, который предоставляет методы для
// перехватывания JavaScript операций. Эти методы аналогичны методам
// proxy handler`ов. Reflect - это не функциональный, а простой объект,
// он не является сконструированным.

class Student {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hi! My name is ${this.name}`);
  }
}

// class ProtoStudent {
//   university = 'Oxford';
// }

const student = Reflect.construct(Student, ['Alex']);

console.log(student); // ProtoStudent { name: 'Alex' }

Reflect.apply(student.greet, { name: 'Tester' }, []); // Hi! My name is Tester

console.log(Reflect.ownKeys(student)); // [ 'name' ]

Reflect.preventExtensions(student); // блокирует изменение объекта

student.age = 25;

console.log(Reflect.isExtensible(student)); // false- изменение разрешено

console.log(student); // Student { name: 'Alex' }
