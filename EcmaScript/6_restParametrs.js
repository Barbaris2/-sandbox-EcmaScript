max(1, 3);
max(1, 3, 5, 7, 9);

// Rest-параметр должен бытьпоследним в функции
// Нельзя иметь больше одного rest-параметра в функции

// old
function max() {
  var numbers = Array.prototype.slice.call(arguments);
  console.log(numbers);
}

//new
function max(a, b, ...numbers) {
  console.log(numbers);
}
