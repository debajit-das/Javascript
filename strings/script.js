// string
let str1 = "web developer";
let str2 = "Debajit Das";
console.log(str2, "is a", str1);
let size1 = str1.length; //str.length is used to determine the length of a string
console.log("Size of str1 is: ", size1);
let size2 = str2.length;
console.log("Size of str2 is: ", size2);
console.log("First letter of str1 is: ", str1[0]);
console.log("Fifth letter of str1 is: ", str1[4]);
console.log("Nineth letter of str1 is: ", str1[8]);
console.log("First letter of str2 is: ", str2[0]);
console.log("Fifth letter of str2 is: ", str2[8]);

// template literals
let sentence = `This is a tempalte literal`;
console.log(sentence);
console.log(typeof sentence);
// example
let obj = {
  item: "Toy",
  price: 250,
};
console.log("The cost of", obj.item, "is", obj.price, "rupees.");
let output = `The cost of ${obj.item} is ${obj.price} rupees.`;
console.log(output);

// string methods
let str11 = str1.toUpperCase();
console.log(str11);
let str22 = str2.toLowerCase();
console.log(str22);
let str3 = "      I am debajit das             ";
let str33 = str3.trim(); //removes white spaces from starting and ending only
console.log(str3);
console.log(str33);
// str.slice(start, end?)  ----returns part of a string
let slice = str1.slice(4, 9); //ending index is non inclusive
console.log(slice);
// str1.concat(str2)   --------join str2 with str1
let concat = str1.concat(str2);
console.log(concat);
// str.replace(searchVal, newVal)
let string = "abcdefgh";
let res1 = string.replace("bcd", "246");
console.log(res1);
// str.charAt(idx)
let res2 = string.charAt(5); //finding a char at certain index
console.log(res2);

// practice
/* (a) Prompt the user to enter their full name. Generate a username for them based on the input.
       Start username with @, followed by their full name and ending with the fullname length.  */

let name = prompt("Enter your name : (do not provide spaces)");
console.log("Your name is :", name);
let userName = "@" + name + name.length;
console.log("Your username is :", userName);
