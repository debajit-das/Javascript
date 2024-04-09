// Write a JavaScript program to create another string from a given string with the first character of the given string added to the front and back.
function front_back(str) {
  first = str.substring(0, 1);
  return first + str + first;
}
console.log(front_back("a"));
console.log(front_back("ab"));
console.log(front_back("abc"));
