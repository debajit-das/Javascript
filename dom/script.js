// dynamic changes or DOM menupulation
document.body.style.background = "black";
document.body.style.color = "gray";
document.body.childNodes[1].innerText = "Lut phut gya";
//accessing the element
//selecting with their id:
let header = document.getElementById("heading1");
console.log(header); //we use console.log() to print the value of any object
console.dir(header); //we use console.dir() to print the whole object

//selecting with their class:
let text = document.getElementsByClassName("heading");
console.log(text);
console.dir(text);

// selecting by tag :
let paras = document.getElementsByTagName("p");
console.log(paras);
console.dir(paras);

// Query Selector
// document.querySelector("myId/ myClass/ tag")
//returns the first element
// document.querySelectorAll("myId/ myClass/ tag")
// returns a node list
let firstElements = document.querySelector("p");
console.dir(firstElements);
let allElements = document.querySelectorAll("p");
console.dir(allElements);
let firstClass = document.querySelector(".heading");
console.dir(firstClass);
let allClass = document.querySelectorAll(".heading");
console.dir(allClass);

// properties
// tagName : returns tag for element nodes
let first = heading1.tagName;
console.log(first);
//    innerText : returns the text content of the element and all its childeren
let val = document.querySelector("div");
let test1 = val.innerText; //returns the inner text of div tag
console.log(test1);
//    innerHTML : returns the plain text or HTML contents in the elements
let test2 = val.innerHTML;
console.log(test2);
//    textContent : returns the textual content even for hidden elements
