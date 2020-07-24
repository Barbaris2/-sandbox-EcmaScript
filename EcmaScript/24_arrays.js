const nested = ['a', 'b', ['c', 'd'], ['e', ['f', 'g']]];

console.log(nested.flat());
// [ 'a', 'b', 'c', 'd', 'e', [ 'f', 'g' ] ]
console.log(nested.flat().flat());
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]

console.log(nested.flat(2));
// [ 'a', 'b', 'c', 'd', 'e', 'f', 'g' ]
