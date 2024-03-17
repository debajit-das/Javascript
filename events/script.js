// Events in JavaScript
// The change in the state of an object is known as anEvent
// Events are fired to notify code of "interesting changes" that may affect the code execution

// Event handlling in Js:
/*Node.event = ()=> {
    // handle here
}*/
let btn1 = document.querySelector("#btn1"); //Accessing the button by id
btn1.onclick = () => {
  console.log("BUtton is clicked");
  let a = 25;
  a++;
  console.log(a);
};
// priority of JS evnt handling is more than inline handling

// Event object: It is a special object that has details about the event
// All event handellers have access to the Event Object's properties methods
/* node.event = (e) => {
    // handle here
}*/
let box = document.querySelector(".box");
box.onmouseover = (evt) => {
  //   prompt("What is your name");
  //   alert("Welcome to developing life");
  console.log(evt);
  console.log(evt.type);
};

// Event Listener (better way to handle events in JS)
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)
// *Note: the callback reference should be same t remove
let btn2 = document.querySelector(".btn2"); // we can add multiple events using eventListener
btn2.addEventListener("click", (evt) => {
  console.log("See whatever you want !");
  console.log(evt);
  console.log(evt.type);
});
btn2.addEventListener("click", () => {
  console.log("1st cllick");
});
btn2.addEventListener("click", () => {
  console.log("2nd cllick");
});
btn2.addEventListener("click", () => {
  console.log("3rd cllick");
});
let click4 = () => {
  console.log("4th cllick"); // We have to store the call back function because the call back function of addEventLlistener and removeEventListener must be same
};
btn2.addEventListener("click", click4);
btn2.removeEventListener("click", click4);

// Practice
/* (a) Cretae a toggle button that changes the screen to dark-mode when clicked & light-mode when clicked again */
/*let theme = document.querySelector(".theme");
let currTheme = "light";
theme.addEventListener("click", () => {
  if (currTheme === "light") {
    currTheme = "dark";
    document.querySelector("body").style.backgroundColor = "black";
  } else {
    currTheme = "light";
    document.querySelector("body").style.backgroundColor = "white";
  }
  console.log(currTheme);
}); */
// another method
let body = document.querySelector("body");
let theme = document.querySelector(".theme");
let currTheme = "light";
theme.addEventListener("click", () => {
  if (currTheme === "light") {
    currTheme = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  } else {
    currTheme = "light";
    body.classList.add("light");
    body.classList.remove("dark");
  }
});
