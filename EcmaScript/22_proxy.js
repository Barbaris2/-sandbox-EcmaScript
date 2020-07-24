// Класс позволяющий добовлять определенные ловушки на объекты
const validator = {
  get(target, prop) {
    return prop in target ? target[prop] : `Поля ${prop} нет`;
  },
  set(target, prop, value) {
    if (value.lenght > 2) {
      Reflect.set(target, prop, value);
    } else {
      console.log('Неверная длинна ');
    }
  }
};

const form = {
  login: 'tester',
  password: '12345'
};

const formProxy = new Proxy(form, validator);

console.log(formProxy); // { login: 'tester', password: '12345' }

console.log(formProxy.login); //tester
console.log(formProxy.password); //12345
console.log(formProxy.username); // Поля username нет

formProxy.password = '12'; // Неверная длинна

function log(message) {
  console.log('[Log]: ', message);
}

const proxy = new Proxy(log, {
  apply(target, thisArg, argArray) {
    if (argArray.length === 1) {
      Reflect.apply(target, thisArg, argArray);
    } else {
      console.log('Количество аргументов не совпадает');
    }
  }
});

proxy('custom'); // [Log]:  custom
proxy(); // Количество аргументов не совпадает
