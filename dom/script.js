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
// innerText : returns the text content of the element and all its childeren
let val = document.querySelector("div");
let test1 = val.innerText; //returns the inner text of div tag
console.log(test1);
// innerHTML : returns the plain text or HTML contents in the elements
let test2 = val.innerHTML;
console.log(test2);
// textContent : returns the textual content even for hidden elements

// attributes
// getAttribute(attr) -----to get the attribute value
let div = document.querySelector("div");
console.log(div);
let value = div.getAttribute("id");
console.log(value);
// setAttribute(attr,value)---to set the attribute value
let change = div.setAttribute("id", "myId"); //we can see the new value from element pannel
console.log(change);

//style
// node.style
div.style.backgroundColor = "gray";

// Insert elements :
// to insert first we have to create a new element
let newBtn = document.createElement("button");
console.log(newBtn);
newBtn.innerText = "Buy Now!";
// node.append (el);-----ads at the end of the node (inside)
let section = document.querySelector("section");
section.append(newBtn);

// node.prepend(el);-----adds at the statrt of the node (inside)
section.prepend(newBtn);

// node.before(el);-----adds before the node (outside)
section.before(newBtn);

// node.after(el);-----adds after the node (outside)
section.after(newBtn);

// Delete element
// node.remove();-----removes the node
