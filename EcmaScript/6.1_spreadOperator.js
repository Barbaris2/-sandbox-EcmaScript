const arr1 = [1, 2, 3];
const arr2 = [1, 7, 4];

//old
const resOld = Math.max.apply(Math, arr1);

//New
const resNew = Math.max(...arr1, 19, ...arr2, 10);
console.log(resNew);

const shallowCopy = [...arr1, ...arr2];
console.log(shallowCopy);
