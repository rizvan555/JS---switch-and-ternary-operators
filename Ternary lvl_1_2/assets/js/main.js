const inputBox = document.querySelector(".input-box");
const article = document.querySelector("#reply");

function checker() {
  const password = inputBox.value;
  const positive = "<span style='color: green'>Welcome to your Account</span>";
  const negative = "<span style='color: red'>Your password is short</span>";

  const reply = password.length >= 8 ? positive : negative;

  article.innerHTML = "<span>" + reply + "</span>";
}
