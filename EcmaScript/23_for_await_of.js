const emulate = (id, ms) =>
  new Promise(resolve => {
    setTimeout(() => resolve(id), ms);
  });

const promises = [
  emulate(1, 250),
  emulate(2, 500),
  emulate(3, 1500),
  emulate(4, 1000)
];

// old
async function old() {
  for (const promise of await Promise.all(promises)) {
    console.log('Old', promise);
  }
}

old();

// New
async function modern() {
  for await (const promise of promises) {
    console.log('Modern', promise);
  }
}

modern();
