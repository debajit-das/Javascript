// Write your code here. Read input using 'readLine()' and print output using 'console.log()'.
const PI = 3.141592653589793;
// let r = 2.6;
// readLine(r);
// let area;
// let perimeter;
// area = PI * r * r;
// perimeter = 2 * PI * r;
// Print the area of the circle:
function area(r) {
  readLine(r);
  area = PI * r * r;
  return area;
}
area(2.6);
console.log(area);
// area(5);
// console.log(area);
// Print the perimeter of the circle:
function perimeter(r) {
  readLine(r);
  perimeter = 2 * PI * r;
  return perimeter;
}
perimeter(2.6);
console.log(perimeter);
// perimeter(5);
// console.log(perimeter);
