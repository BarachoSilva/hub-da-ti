document.addEventListener("DOMContentLoaded", function () {
  const cursos = [
    {
      nome: "Algoritmos",
      imagem: "./img/algoritmos-300x300.jpg",
      descricao: "Descrição do curso de Algoritmos...",
      link: "https://www.cursoemvideo.com/curso/curso-de-algoritmo/",
    },
    {
      nome: "Git e Github",
      imagem: "./img/git-1-300x300.png",
      descricao: "Descrição do curso de Git e Github...",
      link: "https://www.cursoemvideo.com/curso/curso-de-git-e-github/",
    },
    {
      nome: "HTML e CSS",
      imagem: "./img/html5-300x300.jpg",
      descricao: "Descrição do curso de HTML e CSS...",
      link: "https://www.cursoemvideo.com/curso/html5/",
    },
    {
      nome: "JavaScript",
      imagem: "./img/javascript-300x300.jpg",
      descricao: "Descrição do curso de JavaScript...",
      link: "https://www.cursoemvideo.com/curso/javascript/",
    },
  ];

  const cursosContainer = document.getElementById("cursosContainer");

  cursos.forEach((curso) => {
    const cursoDiv = document.createElement("div");
    cursoDiv.classList.add(`curso${cursos.indexOf(curso) + 1}`);

    cursoDiv.innerHTML = `
          <h2>${curso.nome}</h2>
          <img class="logocursos" src="${curso.imagem}" height="200px" width="200px" alt="Imagens referentes ao curso">
          <p>${curso.descricao}</p>
          <a class="linkCurso" href="${curso.link}" target="_blank">LINK PARA O CURSO</a>
      `;

    cursosContainer.appendChild(cursoDiv);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const formularioCadastro = document.querySelector(".cadastro-form");

  formularioCadastro.addEventListener("change", function (event) {
    event.preventDefault();

    function validateEmail(email) {
      const re = /\S+@\S+\.\S+/;
      return re.test(email);
    }

    const nomeInput = document.getElementById("nome");
    const nomeValue = nomeInput.value.trim();
    if (nomeValue.length < 3) {
      alert("Por favor, preencha o campo Nome: com ao menos 3 caracteres.");
      nomeInput.classList.add("campo-invalido");
      nomeInput.classList.remove("campo-valido");
      return;
    } else {
      nomeInput.classList.remove("campo-invalido");
      nomeInput.classList.add("campo-valido");
    }

    const emailInput = document.getElementById("email");
    const emailValue = emailInput.value.trim();
    if (emailValue === "" || !validateEmail(emailValue)) {
      alert("Por favor, insira um formato de e-mail válido (exemplo@exemplo.exemplo).");
      emailInput.classList.add("campo-invalido");
      emailInput.classList.remove("campo-valido");
      return;
    } else {
      emailInput.classList.remove("campo-invalido");
      emailInput.classList.add("campo-valido");
    }

    const telefoneInput = document.getElementById("telefone");
    const telefoneValue = telefoneInput.value.trim();
    if (!/^\d{11}$/.test(telefoneValue)) {
      alert("Por favor, insira um número de telefone válido (11 dígitos -> DDD + num).");
      telefoneInput.classList.add("campo-invalido");
      telefoneInput.classList.remove("campo-valido");
      return;
    } else {
      telefoneInput.classList.remove("campo-invalido");
      telefoneInput.classList.add("campo-valido");
    }

  });

  formularioCadastro.querySelectorAll("input").forEach(function (input) {
    input.addEventListener("input", function () {
      input.classList.remove("campo-invalido", "campo-valido");
    });
  });
});
