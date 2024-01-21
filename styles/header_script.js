let botao = document.querySelector("button");

botao.onclick = clickMenu;

function clickMenu() {
  let nav = document.querySelector(".nav");
  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }
}
