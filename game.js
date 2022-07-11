let box = document.getElementsByClassName("box");
let turn = "X";
function changeturn() {
  return turn === "X" ? "0" : "X";
}
let gameover = false;
function wins() {
  let text = document.getElementsByClassName("text");
  let p = document.getElementById("p");
  let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  Array.from(win).forEach((e) => {
    if (
      text[e[0]].innerHTML === text[e[1]].innerHTML &&
      text[e[1]].innerHTML === text[e[2]].innerHTML &&
      text[e[0]].innerHTML !== ""
    ) {
      text[e[0]].style.textDecoration = "line-through";
      text[e[0]].style.textDecorationThickness = "2px";
      text[e[1]].style.textDecoration = "line-through";
      text[e[1]].style.textDecorationThickness = "2px";
      text[e[2]].style.textDecoration = "line-through";
      text[e[2]].style.textDecorationThickness = "2px";
      p.innerHTML = "Winner is " + text[e[0]].innerHTML;
      gameover = true;
    }
  });
}

Array.from(box).forEach((element) => {
  let text = element.querySelector(".text");
  let p = document.getElementById("p");
  element.addEventListener("click", () => {
    if (text.innerHTML === "") {
      text.innerHTML = turn;
      wins();
      if (gameover === false) {
        turn = changeturn();
        p.innerHTML = "Turn For " + turn;
      }
    }
  });
});
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
  let p = document.getElementById("p");
  let text = document.getElementsByClassName("text");
  Array.from(text).forEach((e) => {
    e.innerHTML = "";
    e.style.textDecoration = "none";
    turn = "X";
    p.innerHTML = "Turn For X";
    gameover = false;
  });
});
