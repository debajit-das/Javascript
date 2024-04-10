// Converts a specified number to an array of digits
const digitize = (n) => [...`${n}`].map((i) => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));
