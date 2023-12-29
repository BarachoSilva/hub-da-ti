let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

function mostraPopup(input, label) {
    input.addEventListener("focus", () => {
      label.classList.add("required-popup");
    });
  }
  
  mostraPopup(usernameInput, usernameLabel);
  mostraPopup(emailInput, emailLabel);

  function escondePopup(input, label) {
    input.addEventListener("blur", () => {
      label.classList.remove("required-popup");
    });
  }
  
  escondePopup(usernameInput, usernameLabel);
  escondePopup(emailInput, emailLabel);

  usernameInput.addEventListener("change", (event) => {
    let valor = event.target.value;
    console.log(valor.length);
  
    if (valor.length < 3) {
      usernameInput.classList.remove("correct");
      usernameInput.classList.add("error");
      usernameHelper.innerText = "Seu nome deve ter 3 ou mais caracteres";
      usernameHelper.classList.add("visible");
    } else {
      usernameInput.classList.remove("error");
      usernameInput.classList.add("correct");
      usernameHelper.classList.remove("visible");
    }
  });

  emailInput.addEventListener("change", (event) => {
    let valor = event.target.value;
  
    const regexEmail = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;
  
    if (regexEmail.test(valor)) {
      emailInput.classList.remove("error");
      emailInput.classList.add("correct");
      emailHelper.classList.remove("visible");
    } else {
      emailInput.classList.remove("correct");
      emailInput.classList.add("error");
      emailHelper.innerText = "Você deve inserir um email válido";
      emailHelper.classList.add("visible");
    }
  });