// for loop
/*syntax->  for(initialization; stopping condition; updation){
    console.log("My name is Debajit Das");
}*/
// print 5 times
for (let count = 1; count <= 5; count++) {
  console.log("I am a Web developer");
}

// calculate sum of 1 to 5
let sum = 0;
for (let num = 0; num <= 5; num++) {
  sum = sum + num;
}
console.log("Sum of 1 to 5 is : ", sum);

// infinite loop: a loop that never ends-> stopping condition alwys gives true value

// while loop
/* syntax-> while(stopping condition){
    console.log("I am a web developer")
}*/
let i = 1;
while (i <= 5) {
  console.log("i = ", i);
  i++; //updation condition
}

// do-while-loop -- condition is been checked at last. At least give one output.

/* syntax-> do{
    console.log("I am a web developer");
}while (condition) */
let j = 1;
do {
  console.log("I am a web developer");
  j++;
} while (j <= 10);

// for-of loop (it helps to iterate in strings and arrays it is cannot used in object)
/* syntax-> for(let val of strVar){
  console.log("I am a web developer");
} */
let str = "WebDeveloper";
let size = 0;
for (let val of str) {
  //we dont have to initialize val
  console.log("val = ", val);
  size++;
}
console.log("Size of the string : ", size);

// for-in loop (it is used in objects)
/* syntax -> for(let key in objVar) {
  console.log("I am a web developer");
} */
let student = {
  name: "Debajit Das",
  age: 22,
  cgpa: 8.3,
  isPass: true,
};
for (let key in student) {
  console.log("Key = ", key, " Value = ", student[key]); // key will return only the key not the value.
}

// practice
// (a) find all the even numbers from 0 to 100
let y = 0;
for (let x = 0; x <= 100; x++) {
  if (x % 2 === 0) {
    console.log("Even numbers are =", x);
  }
}

/* (b) create a game where you start with any random game number. Ask the user to keep
       guessing the number untill the user enters correct value */
let gameNum = 18;
let userNum = prompt("Guess the game number : ");
console.log(userNum);
while (userNum != gameNum) {
  // prompt take value as string that s why we can not use !==   we have to use != instead
  console.log("Sorry you entered wrong number. Guess agan : ");
  userNum = prompt("Sorry you entered wrong number. Guess agan : ");
}
console.log("Congrats, you win...");
