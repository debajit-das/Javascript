// arrays (collection of items)

// create arrays
let hero = ["ironman", "spiderman", "superman", "batman", "thor"];
console.log(hero);
console.log(typeof hero);

let marks = [96, 75, 88, 54, 67];
console.log(marks.length);
console.log(marks);
marks[2] = 50; //we can change the key value of any array by their index
// but we cannot change the value of string because string is immutable
console.log("The updated marks are :", marks);

let info = ["Debajit", 95, "Malda"];

// looping over a array

// using for loop
let fruits = ["mango", "guava", "apple", "litchi", "banana", "orange"];
for (let idx = 0; idx < fruits.length; idx++) {
  //idx <= is not valid cause idx starts from 0. that's why we have to iterate till length-1
  console.log(fruits[idx]);
}

// using for-of loop

for (let element of fruits) {
  console.log(element);
}

// practie
/* (a) For a given array with marks of students ->[85,97,44,37,76,60]
       Find the average marks of the entier class */
let studentMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let i = 0; i < studentMarks.length; i++) {
  sum = sum + studentMarks[i];
}
console.log("Average mark = ", sum / studentMarks.length);

/* (b) For a given array with prices of 5 items -> [250,645,300,900,50]
       All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.  */
let items = [250, 645, 300, 900, 50];
/* for (let price of items) {
   let off = price / 10;
   console.log("New price after discount :", (price -= off));
   }  */

for (let j = 0; j < items.length; j++) {
  let off = items[j] / 10;
  items[j] -= off;
}
console.log(items);

// Array Methods
// arr.push() : add to end
let foodItems = ["mango", "guava", "apple", "litchi", "banana", "orange"];
console.log(foodItems);
foodItems.push("jackfruit", "grape");
console.log("foodItems after pushing :", foodItems);
// arr.pop() : delete from end return
let deleted = foodItems.pop(); // it will delete only one item from last
console.log("foodItems after poping :", foodItems);
console.log("The deleted item is :", deleted);
// arr.unshift() : add to start
foodItems.unshift("cake");
console.log("foodItems after adding :", foodItems);
// arr.shift() : delete from start and return
let deletedItem = foodItems.shift(); // it will delete only one item from last
console.log("foodItems after deleting :", foodItems);
console.log("The deleted item is :", deletedItem);
// arr.toString() : convert array to string
let str = foodItems.toString();
console.log(str);
// arr.concat() : joins multile arrays & return the result
let con = hero.concat(fruits, info); // we can concatenate multiple numbers of arrays
console.log(con);
// arr.slice(startidx, endidx) : returns a piece of the array
console.log(fruits);
let slice = fruits.slice(1, 4);
console.log(slice);
// arr.splice(startidx, delcount, newelement) : change the original array (add, remove, replace)
console.log(marks);
let splice = marks.splice(1, 2, 45, 59, 86); //it changes the original array
console.log(marks);
console.log("DEleted part :", splice);

/* (c) Create an array to store companies -> "Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"*/
let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
console.log(companies);
//  (i) Remove the first company from the array
companies.shift();
console.log("After removing first company :", companies);
//  (ii)Remove Uber and add Ola on its place
companies.splice(1, 1, "Ola");
console.log("After replacing  Uber :", companies);
//  (ii)Add Amazon at the end
companies.push("Amazon");
console.log("After adding Amazon at the last :", companies);
