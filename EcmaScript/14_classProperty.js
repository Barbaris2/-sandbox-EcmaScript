// Class properties
// Создание свойства в теле класса без констуктора

class Counter {
  count = 0;

  inc = () => {
    this.count++;
    console.log(this.count);
  };
}

const cnt = new Counter();
console.log(cnt.count);

cnt.inc();
console.log(cnt.count);
