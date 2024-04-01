/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/

function getArea(length, width) {
  let area;
  // Write your code here
  area = length * width;
  return area;
}
getArea(3, 4.5);
// console.log(area);
/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/

function getPerimeter(length, width) {
  let perimeter;
  // Write your code here
  const x = length + width;
  perimeter = 2 * x;
  return perimeter;
}
getPerimeter(3, 4.5);
// console.log(perimeter);
