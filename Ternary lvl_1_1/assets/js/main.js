const input = document.querySelector("#input-container");
const inputBox = document.querySelector(".input-box");

const article = document.querySelector("#reply");

function checker() {
  if (inputBox.value > 18) {
    console.log("volljährig");
    article.innerHTML = "<span>volljährig</span>";
  } else {
    article.innerHTML = "<span>minderjährig</span>";
  }
}
