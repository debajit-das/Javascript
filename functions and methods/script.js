// function
// function definition
function functionName() {
  console.log("Welcome to programming life");
  console.log("I am learning Java Script");
}
// function call
functionName(); // it reduces redundency

// parameter
function firstFunction(msg) {
  // msg is parameter
  console.log(msg);
}
firstFunction("i am a developer"); // "i am a developer" is an argument

// create a function which calculate sum of two numbers
function sum(a, b) {
  //parameter of a functions are local variable
  x = a + b;
  //   console.log("sum =", a + b);
  return x;
}
sum(5, 10);
console.log("Sum is :", x);

let y;
function mul(a, b) {
  y = a * b;
  return y;
}
mul(5, 9);
console.log("Multiplication is :", y);
// arrow functions
/*const secondFunc = (param1,param2)=>{
    // do some work
}*/
const arrowSum = (a, b) => {
  //   console.log(a + b);
  return a + b;
};
// arrowSum(111, 122);

const arrowmul = (a, b) => {
  return a * b;
};

// practice
/* (a) Create a function using the "function" keyword that takes a String as an argument & 
returns the numbers of vowels in the string. */
function vowel(string) {
  let count = 0;
  for (alphabet of string) {
    if (
      alphabet === "a" ||
      alphabet === "e" ||
      alphabet === "i" ||
      alphabet === "o" ||
      alphabet === "u" ||
      alphabet === "A" ||
      alphabet === "E" ||
      alphabet === "I" ||
      alphabet === "O" ||
      alphabet === "U"
    ) {
      count++;
    }
  }
  console.log("Number of vowels are", count);
}
vowel("i am a developer");

// (b) create an arrow function to perform the same task

const arrowvowels = (str) => {
  let count = 0;
  for (alphabet of str) {
    if (
      alphabet === "a" ||
      alphabet === "e" ||
      alphabet === "i" ||
      alphabet === "o" ||
      alphabet === "u" ||
      alphabet === "A" ||
      alphabet === "E" ||
      alphabet === "I" ||
      alphabet === "O" ||
      alphabet === "U"
    ) {
      count++;
    }
  }
  console.log("Number of vowels are", count);
};

//  *** forEach Loop in arrays***
// arr.forEach(callbackFunc(value, index, array))  ----we can use value or index or array itself as callback function
// callback function : here it is a function to execute for each element in the array
let arr = [2, 5, 8, 200];
arr.forEach((val) => {
  console.log(val);
});
let cities = ["Malda", "Delhi", "Kolkata", "Dehradun"];
cities.forEach((city, idx, cities) => {
  console.log(city.toUpperCase(), idx, cities);
});
console.log(cities);

/* (c) For a given array number of numbers, print the square of each value using forEach loop. */
let numbers = [12, 15, 8, 29, 89];
numbers.forEach((val) => {
  console.log("Square of", val, "is", val * val);
});

//Map
/* Creates a new array with the results of some operations. The value its callback returns are used to form a new array*/
// arr.map(callbackFunc(value, index, array))
let square = numbers.map((val) => {
  //   console.log(val);
  return val * val;
});
console.log(square); //new array of square

// filter
/* Creates a new array of elements that give true for a conditin or filter */
let evenNumbers = numbers.filter((val) => {
  return val % 2 === 0;
});
console.log("The original array is :", numbers);
console.log("The array of even number is :", evenNumbers);

// reduce method--- when input is more than 1 but output is only one e.g- sum, avg etc
const output = numbers.reduce((prev, curr) => {
  return prev + curr;
});
console.log("Sum of values of array numbers is :", output);

const largest = numbers.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});
console.log("Largest value of the array is :", largest);

/* (d) We are given array of marks of students. Filter out of the marks of that students that scored 90+ */
const marks = [43, 85, 37, 99, 98, 78, 89, 93];
const aboveNinety = marks.filter((val) => {
  return val > 90;
});
// console.log(marks);
console.log("Marks avobe 90 :", aboveNinety);

/* (e) Take a number n as an input from user. Create an array of numbers from 1 to n.
       Use the reduce method to calculate the sum of all numbers in the array.
       Use the reduce method to calculate the sum of all numbers in the array. */
let n = prompt("Enter a number:");
let array = [];
for (let i = 1; i <= n; i++) {
  array[i - 1] = i;
}
console.log(array);
let summation = array.reduce((prev, curr) => {
  return prev + curr;
});
console.log("Sum of all the values of array :", summation);
let product = array.reduce((prev, curr) => {
  return prev * curr;
});
console.log("Product of all the values of the array :", product);
