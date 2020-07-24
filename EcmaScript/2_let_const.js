a = 11;

var a = 1; // hoisting
let b = 2; // no hoisting
const c = 3; // no hoisting

for (var i = 0; i < 0; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
/// out: 3, 3, 3

for (let i = 0; i < 0; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}
/// out: 0, 1, 2
