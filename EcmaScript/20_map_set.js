// map (как бы объект)

const map = new Map([['a', 1]]);
console.log(map); // Map { 'a' => 1 }

console.log(map.get('a')); // 1

map.set('b', 2);
console.log(map); // Map { 'a' => 1, 'b' => 2 }

// ключами ы map-ах может быть что угодно

map.set('"', 2).set(NaN, 'number');
console.log(map); // Map { 'a' => 1, 'b' => 2, '"' => 2, NaN => 'number' }

//map.clear(); // очистить весь map
console.log(map.has(13));
map.delete('b'); // true-успешно
console.log(map.size); // 3

console.log(map.keys()); // [Map Iterator] { 'a', '"', NaN }
console.log(map.entries()); // [Map Entries] { [ 'a', 1 ], [ '"', 2 ], [ NaN, 'number' ] }
console.log(map.values()); // [Map Iterator] { 1, 2, 'number' }

// SET (как бы массив)

const set = new Set([1, 1, 2, 3, 5, 8, 13, 13, 5, 8]);
console.log(set); // Set { 1, 2, 3, 5, 8, 13 }
// В Set не содеььрдатся дубликатов

console.log(set.size); // 6
console.log(set.add(21)); // Set { 1, 2, 3, 5, 8, 13, 21 }

// set.clear()
set.delete(1); // true-успешно
console.log(set); // Set { 2, 3, 5, 8, 13, 21 }
