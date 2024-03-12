//arithmetic operators -> ( +, -, *, / )
let a = 5;
let b = 2;
let c = a + b;

console.log("a = ", a, "& b = ", b);
console.log("a + b = ", a + b);
console.log("a + b = ", c);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);

// modulus operator-> % (gives the remainder)

console.log("If a is devided by b remainder will be : ", a % b);

// exponentiation-> **

console.log("a ** b = ", a ** b);
// all of the above operators need atleast two operands to operates

// These two operators can operates on a single operands (UNARY OPERATORS)

// Increment-> (++)
//  a++ = print a and increase the value of a and store it (post increament)
//  ++a = increase the value of a and print it (pre increament)
console.log("The next number of a is : ", ++a);

// Decreament-> (--)
//  a-- = print a and decrease the value of a and store it (post decreament)
//  --a = decrease the value of a and print it (pre decreament)
console.log("The previous number of b is : ", --b);

// Assignment operators-> (=, +=, -=, *=, %=, **=)
// a += 1 => a = a + 1
// a -= 1 => a = a - 1 etc.
//  same for all..
let x = 8;
x += 4;
console.log("x = ", x);

// Comparison operators-> (==, !=, ===, !==, >, <, >=, <=)
// equal to  ==
console.log("5 equal to 2", 5 == 2);
console.log("5 equal to 5", 5 == 5);

// not equal to !=
console.log("5 not equal to 2", 5 != 2);
console.log("5 not equal to 5", 5 != 5);

// here == checks only the value not the type
console.log("5 equal to '5'", 5 == "5"); //Here "5" is a string, though it will return true value

// equal to & type ===   (It will check the value as well as data types)
console.log("5 equal to '5'", 5 === "5");

// not equal to & type !==
console.log("5 not equal to '5'", 5 !== "5");

// other comparision operators
// let p = 5;
// let q = 3;
console.log("a > b ", a > b);
console.log("a < b ", a < b);
console.log("5 >= 5 ", 5 >= 5);
console.log("5 <= 5 ", 5 <= 5);

// Logical operators-> (&&, ||, !)
// logical and (&&)  ----both the condition need to be true to get the output true.
console.log("a = ", a);
let cond1 = a > b;
let cond2 = a === 6;
let cond3 = a === 4;
let cond4 = a < b;
console.log("cond1 && connd2 = ", cond1 && cond2);
console.log("cond1 && connd3 = ", cond1 && cond3);

// logical or (||)  -----any of the condition is true the output will be true
console.log("cond1 || connd2 = ", cond1 || cond2);
console.log("cond3 || connd4 = ", cond3 || cond4);

// logical not (!)   -----it will make true statement false, and false statement true....
console.log("!(7 < 4) = ", !(7 < 4));
console.log("!(7 === 7) = ", !(7 === 7));
