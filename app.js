const firstLetter = [
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6],
  [7, 7],
  [8, 8],
  [9, 9],
  [10, 10],
  ["J", 10],
  ["Q", 10],
  ["K", 10],
  ["A"],
];
const secondLetter = ["H", "S", "D", "C"];

let pulledNum = 0;
let pulled = false;
const button = document.getElementById("button");
const pullAnother = document.getElementById("pullAnother");
const lost = document.querySelector(".lost");
const cards = document.querySelectorAll(".card");
let counter = 0;
let values = 0;

if (counter <= 1) {
  pullAnother.disabled = false;
}

function pullCard(order) {
  lost.style = "display:none;";
  if (pulledNum < 5) {
    let randomNumber = Math.floor(Math.random() * firstLetter.length);
    cards[order].src =
      "./img/cards/" +
      firstLetter[randomNumber][0] +
      secondLetter[Math.floor(Math.random() * secondLetter.length)] +
      ".png";
    if (values <= 10 && firstLetter[randomNumber] == "A") {
      values += 11;
    } else if (values > 10 && firstLetter[randomNumber] == "A") {
      values += 1;
    } else {
      values += firstLetter[randomNumber][1];
    }
    pulledNum++;
    button.disabled = true;
    console.log(values);
  }
  if (values > 21) {
    setTimeout(gameLost(), 1000);
  }
  counter++;
  let valueField = document.getElementById("valueField");
  valueField.innerHTML = values;
}

function gameLost() {
  lost.style = "display: flex;";
  for (let i = 0; i < cards.length; i++) {
    cards[i].src = "";
  }
  values = 0;
  button.disabled = false;
  pulledNum = 0;
}

function finish() {
  const finish = document.querySelector(".finish");
  finish.style = "display: flex;";
  for (let i = 0; i < cards.length; i++) {
    cards[i].src = "";
  }
  values = 0;
  button.disabled = false;
  pulledNum = 0;
}
