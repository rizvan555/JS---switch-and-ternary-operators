const input = document.querySelector("#input-container");
const inputBox = document.querySelector(".input-box");
const article = document.querySelector("#reply");

function checker() {
  const password = inputBox.value;
  const positive = "Welcome to your Account";
  const negative = "Your password is short";

  const reply = password.length >= 8 ? positive : negative;

  article.innerHTML = "<span>" + reply + "</span>";
}
