const arrayPostagens = [
  {
    textoMateria: "Quer aprender a fazer seu primeiro site usando HTML + CSS?",
    tituloMateria: "Nesse vídeo Andriana te ensina a fazer um site simples dando várias dicas práticas! E mais! Usando apenas HTML e CSS...",
    imagem: "./img/youtube_adriana.png",
    textoOrigem: "Canal Adriana Saty",
    link: "https://www.youtube.com/watch?v=n_Etdr7Dbjs"
  },
  {
    textoMateria: "Quer aprender a fazer seu primeiro portfólio de um modo fácil e rápido?",
    tituloMateria: "Nesse vídeo Gabriela ensina como criar um portfolio rápido e fácil do zero...",
    imagem: "./img/youtube_gabriela.png",
    textoOrigem: "Canal Gabriela Pinheiro",
    link: "https://www.youtube.com/watch?v=jZurhyJTJOM"
  },
  {
    textoMateria: "APRENDA C# BÁSICO EM 30 MINUTOS!",
    tituloMateria: "Guia do vídeo: 00:00 - Introdução, 01:15 - Variáveis, 04:36 - Métodos, 06:35...",
    imagem: "./img/crie_seus_jogos.png",
    textoOrigem: "Canal Crie Seus Jogos",
    link: "https://www.youtube.com/watch?v=DA-DQsmPItU"
  },
  {
    textoMateria: "Aprenda C++ EM UM VÍDEO (Tutorial Básico de Programação)",
    tituloMateria: "Preparado(a) para dar o primeiro passo em sua caminhada rumo ao desenvolvimento de Jogos? Então confira os vários cursos...",
    imagem: "./img/uniday_studio.png",
    textoOrigem: "Canal Uniday Studio  -  2020 - By: Guilherme Teres Nunes",
    link: "https://www.youtube.com/watch?v=McbdxZ3Se2U"
  },
  {
    textoMateria: "APRENDA JAVASCRIPT MODERNO (2021) // TUTORIAL MAIS COMPLETO DA INTERNET",
    tituloMateria: "Acesse agora mesmo e inicie sua jornada...",
    imagem: "./img/danki_code.png",
    textoOrigem: "Canal Danki Code",
    link: "https://www.youtube.com/watch?v=P9xBhwugj4M"
  },
  {
    textoMateria: "Como sair do ZERO em JAVA em 1h - com @kipperdev",
    tituloMateria: "Para quem programa e quer dar os primeiros passos na linguagem de Java, esse vídeo vai explicar os conceitos fundamentais da linguagem...",
    imagem: "./img/rocketseat.png",
    textoOrigem: "Canal Rocketseat",
    link: "https://www.youtube.com/watch?v=EpXYPB1rv4w&t=16s"
  },
]

for (let i = 0; i < arrayPostagens.length; i++){

// criando o elemento
const div = document.createElement("div")
div.id=`post-${[i + 1]}`


// populando o elemento
div.innerHTML =
`<h3><p>${arrayPostagens[i].textoMateria}</p>${arrayPostagens[i].tituloMateria}</h3>
<a href="${arrayPostagens[i].link}" target="_blank"><img height="150px" width="650px" src="${arrayPostagens[i].imagem}">
<p>${arrayPostagens[i].textoOrigem}</p>`


// adicionando ao DOM
const section = document.querySelector('section')
section.appendChild(div)
}
