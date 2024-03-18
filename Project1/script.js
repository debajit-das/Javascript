let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let turnO = true; //player X, player O
const win = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Box was clicked");
    if (turnO === true) {
      //player O
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X"; //player X
      turnO = true;
    }
    box.disabled = true; // to disable the button
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of win) {
    /*console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    );*/
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner");
      }
    }
  }
};
