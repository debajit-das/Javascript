//CONDITIONAL STATEMENTS
//  if statements
let age1 = 25;
let age2 = 15;
if (age1 > 18) {
  console.log("You can vote!");
}
if (age2 < 18) {
  console.log("You can not vote!");
}

let mode = "dark";
let color;
if (mode === "dark") {
  color = "black";
}
if (mode === "light") {
  color = "white";
}
console.log(color);

// if-else statement
if (mode === "light") {
  color = "black";
} else {
  color = "white";
}
console.log(color);

let age = 16;
if (age > 18) {
  console.log("You can vote!");
} else {
  console.log("You can not vote!");
}

// FINDING if the number is odd or even...
let num = 10;
if (num % 2 === 0) {
  console.log("The number is even");
} else {
  console.log("The number is odd");
}

//  else-if statement

let age3 = 66;
if (age3 < 18) {
  console.log("Teenager");
} else if (age3 < 60) {
  console.log("Adult");
} else {
  console.log("Senior");
}

// ternary operators (it works on three operands)
// syntax-> condition ? true output : false output
console.log("age = ", age);
let result = age > 18 ? "Adult" : "Not Adult";
console.log(result);

// taking prompt from user
alert("hello");
let name = prompt("What is yuor name:");
console.log("My name is :", name);
