// Methods

const str = 'Hello';

console.log(str.startsWith('He')); // true
console.log(str.endsWith('as')); // false

console.log(str.includes('llo')); // true
console.log(str.repeat(3)); //HelloHelloHello

console.log(str.trim()); // Delete space
console.log(str.trimEnd()); // Delete space at the end
console.log(str.trimStart()); // Delete space at the begin

console.log(str.padStart(10)); // '     Hello'. Set min length string
console.log(str.padStart(10, 1234)); // '12341Hello'
console.log(str.padStart(8, 'abc')); // 'Helloabc'
