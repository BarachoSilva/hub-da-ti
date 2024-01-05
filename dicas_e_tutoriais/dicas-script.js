const arrayPostagens = [
  {
    textoMateria: "Quer aprender a fazer seu primeiro site usando apenas HTML e CSS",
    tituloMateria: "Nesse vídeo Andriana te ensina a fazer um site simples dando várias dicas práticas ...",
    imagem: "./img/youtube_adriana.png",
    textoOrigem: "Canal Adriana Saty",
    link: "https://www.youtube.com/watch?v=n_Etdr7Dbjs"
  },
  {
    textoMateria: "Quer aprender a fazer seu primeiro portfólio de um modo fácil e rápido",
    tituloMateria: "Nesse vídeo Gabriela ensina como criar um portfolio rápido e fácil do zero ...",
    imagem: "./img/youtube_gabriela.png",
    textoOrigem: "Canal Gabriela Pinheiro",
    link: "https://www.youtube.com/watch?v=jZurhyJTJOM"
  },
  {
    textoMateria: "Quer aprender C#",
    tituloMateria: "Descubra como desenvolver programas na linguagem em apenas 30 minutos ...",
    imagem: "./img/crie_seus_jogos.png",
    textoOrigem: "Canal Crie Seus Jogos",
    link: "https://www.youtube.com/watch?v=DA-DQsmPItU"
  },
  {
    textoMateria: "Quer aprender C++",
    tituloMateria: "Preparado(a) para dar o primeiro passo em sua caminhada rumo ao desenvolvimento de Jogos? Então confira os vários cursos ...",
    imagem: "./img/uniday_studio.png",
    textoOrigem: "Canal Uniday Studio",
    link: "https://www.youtube.com/watch?v=McbdxZ3Se2U"
  },
  {
    textoMateria: "Quer aprender Javascript de um jeito moderno",
    tituloMateria: "Acesse agora mesmo e inicie sua jornada com o tutorial mais completo da internet ...",
    imagem: "./img/danki_code.png",
    textoOrigem: "Canal Danki Code",
    link: "https://www.youtube.com/watch?v=P9xBhwugj4M"
  },
  {
    textoMateria: "Como sair do zero em Java em apenas 1 hora",
    tituloMateria: "Para quem programa e quer dar os primeiros passos na linguagem de Java, esse vídeo vai explicar os conceitos fundamentais da linguagem...",
    imagem: "./img/rocketseat.png",
    textoOrigem: "Canal Rocketseat",
    link: "https://www.youtube.com/watch?v=EpXYPB1rv4w&t=16s"
  },
]

for (let i = 0; i < arrayPostagens.length; i++) {
    // criando o elemento
    const div = document.createElement("div");
    div.id = `post-${[i + 1]}`;

    // populando o elemento
    div.innerHTML =
        `<span>
            <h3>
                <p>${arrayPostagens[i].textoMateria}</p>
                ${arrayPostagens[i].tituloMateria}
            </h3>
        </span>
        <span>
            <img height="80px" width="auto" src="${arrayPostagens[i].imagem}">
            <p>${arrayPostagens[i].textoOrigem}</p>
            <a class="saibaMais" href="${arrayPostagens[i].link}" target="_blank">Saiba mais</a>
        </span>`;

    // adicionando ao DOM
    const section = document.querySelector('section');
    section.appendChild(div);
}
