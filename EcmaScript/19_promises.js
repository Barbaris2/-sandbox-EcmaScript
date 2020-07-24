const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success');
  }, 500);
});

console.log(promise); // Promise { <pending> }
promise.then(data => console.log(data)); // Success

const delay = ms =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('Done'), ms);
  });

delay(1000)
  .then(data => console.log(data))
  .catch(err => console.log(err))
  .finally(() => console.log('Finaly'));

async function asyncDelay() {
  try {
    const data = await delay(2000);
    console.log(data);
  } catch (error) {
    console.log('error');
  }
}

asyncDelay();

Promise.all([delay(1000), delay(500), delay(2000)]).then(
  data => console.log(data) // [ 'Done', 'Done', 'Done' ] Ждет пока завершаться все промисы
);

Promise.race([delay(1000), delay(500), delay(2000)]).then(
  data => console.log(data) // Done возвращает самый промис
);
