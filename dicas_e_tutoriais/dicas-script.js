// declarar a arrayPostagens
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
    textoMateria: "Como usar a função slice() do Python",
    tituloMateria: "Ao escrever programas Python, você frequentemente usará uma variedade de itens (como números, letras, etc.). Por exemplo, você pode usar os números de 1 a 10 em uma lista ...",
    imagem: "https://cdn.thenewstack.io/media/2023/12/c02c745a-ivan-torres-mquqbmszggm-unsplash-e1702306299644-1024x683.jpg",
    textoOrigem: "The News Stack",
    link: "https://thenewstack.io/how-to-use-the-python-slice-function/"
  },
  {
    textoMateria: "Aprendizado de máquina para desenvolvedores Java: pipelines de dados de aprendizado de máquina",
    tituloMateria: "Aprenda como construir e implantar um modelo de dados de aprendizado de máquina em um ambiente de produção baseado em Java usando Weka, Docker e REST ...",
    imagem: "https://images.idgesg.net/images/article/2019/11/ai_artificial_intelligence_ml_machine_learning_robot_touch_human_hand_by_kentoh_gettyimages_1060703206-100817766-large.jpg?auto=webp&quality=85,70",
    textoOrigem: "Info World",
    link: "https://www.infoworld.com/article/3454363/machine-learning-for-java-developers-machine-learning-data-pipelines.html"
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
    textoMateria: "Introdução ao Python no Visual Studio Code",
    tituloMateria: "Use a extensão Python para Visual Studio Code para criar, gerenciar, executar e testar projetos Python facilmente ...",
    imagem: "https://images.idgesg.net/images/article/2024/01/python-extension-100957638-large.jpg?auto=webp&quality=85,70",
    textoOrigem: "Info World",
    link: "https://www.infoworld.com/article/3712420/get-started-with-python-in-visual-studio-code.html"
  },
  {
    textoMateria: "Quer aprender Javascript de um jeito moderno",
    tituloMateria: "Acesse agora mesmo e inicie sua jornada com o tutorial mais completo da internet ...",
    imagem: "./img/danki_code.png",
    textoOrigem: "Canal Danki Code",
    link: "https://www.youtube.com/watch?v=P9xBhwugj4M"
  },
  {
    textoMateria: "Como implementar um mapeador de objetos personalizado em C#",
    tituloMateria: "AO AutoMapper facilita a vida, mas tem seus limites. Aprenda como implementar um mapeador personalizado para lidar com estruturas de dados complexas ou tipos incompatíveis ...",
    imagem: "https://images.idgesg.net/images/article/2020/07/data_structure_explosion_proliferation_transmission_data_streams_volume_velocity_organization_by_gremlin_gettyimages-1189823155_cso_2400x1600-100852891-large.jpg?auto=webp&quality=85,70",
    textoOrigem: "Info World",
    link: "https://www.infoworld.com/article/3712340/how-to-implement-a-custom-object-mapper-in-c-sharp.html"
  },
  {
    textoMateria: "Como sair do zero em Java em apenas 1 hora",
    tituloMateria: "Para quem programa e quer dar os primeiros passos na linguagem de Java, esse vídeo vai explicar os conceitos fundamentais da linguagem ...",
    imagem: "./img/rocketseat.png",
    textoOrigem: "Canal Rocketseat",
    link: "https://www.youtube.com/watch?v=EpXYPB1rv4w&t=16s"
  },
  {
    textoMateria: "Como definir e usar suas próprias funções em Python",
    tituloMateria: "Aprenda como definir e usar suas funções em Python. Uma função é um pedaço de código reutilizável que pode executar uma funcionalidade específica sempre que for chamada em um programa ...",
    imagem: "https://cdn.thenewstack.io/media/2024/01/084a5ad5-python1-1024x532.png",
    textoOrigem: "The News Stack",
    link: "https://thenewstack.io/how-to-define-and-use-your-own-functions-in-python/"
  },
]

for (let i = 0; i < arrayPostagens.length; i++) {
    // crir o elemento
    const div = document.createElement("div");
    div.id = `post-${[i + 1]}`;

    // popular o elemento
    div.innerHTML =
        `<span>
            <h3><p>${arrayPostagens[i].textoMateria}</p>
            ${arrayPostagens[i].tituloMateria}</h3>
        </span>
        <span>
            <img height="75px" width="auto" src="${arrayPostagens[i].imagem}">
            <p>${arrayPostagens[i].textoOrigem}</p>
            <a class="saibaMais" href="${arrayPostagens[i].link}" target="_blank">Saiba mais</a>
        </span>`;

    // adicionar ao DOM
    const section = document.querySelector('section');
    section.appendChild(div);
}
