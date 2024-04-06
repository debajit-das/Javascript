// Write a JavaScript program to check a pair of numbers and return true if one of the numbers is 50 or if their sum is 50.

function test50(x, y) {
  return x == 50 || y == 50 || x + y == 50;
}
console.log(test50(50, 50));
console.log(test50(20, 50));
console.log(test50(20, 20));
console.log(test50(20, 30));
