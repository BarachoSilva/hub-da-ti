// declarar a lista de postagens dinâmicas
const arrayPostagensJaneiro = [
  {
    tituloMateria: "ISRO estudará buracos negros com lançamento de novo satélite, o segundo globalmente:",
    textoMateria: "No Ano Novo, a Organização Indiana de Investigação Espacial (ISRO) iniciou a sua expedição espacial com o lançamento bem sucedido do seu satélite inaugural ...",
    imagem: "https://thetechportal.com/wp-content/uploads/2021/03/EvS5xK4VcAA4dOq-e1614580093918-800x430.jpg",
    textoOrigem: "CNN Brasil - 20/12/2023",
    link: "https://thetechportal.com/2024/01/01/isro-to-study-black-holes-with-new-satellite-launch-second-globally/",
    diaPostagem: "1"
  },
]

const arrayPostagensDezembro = [
  {
    tituloMateria: "IA não pode ser “inventora” de patentes, decide Suprema Corte britânica",
    textoMateria: "Um cientista da computação dos Estados Unidos foi derrotado nesta quarta-feira em sua tentativa de registrar patentes sobre invenções criadas por seu sistema de inteligência artificial em um caso histórico no Reino Unido sobre a possibilidade de IA possuir direitos de patente...",
    imagem: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/12/inteligencia-artificial-pexels.jpg?w=1220&h=674&crop=1",
    textoOrigem: "CNN Brasil - 20/12/2023",
    link: "https://www.cnnbrasil.com.br/tecnologia/ia-nao-pode-ser-inventora-de-patentes-decide-suprema-corte-britanica/",
    diaPostagem: "2023-12-20"
  },
  {
    tituloMateria: "O uso de línguas indianas no desenvolvimento de IAs poderá reduzir o preconceito na tecnologia",
    textoMateria: "O uso de línguas indianas na programação para inteligência artificial (IA) reduzirá os preconceitos na próxima geração de tecnologia que utiliza apenas linguagens limitadas ou específicas, disse o secretário S. Krishnan do Ministério da Eletrônica e de TI em evento da FICCI nesta segunda-feira...",
    imagem: "https://img.etimg.com/thumb/msid-106099405,width-650,height-488,imgsize-161410,resizemode-75/illustration-shows-ai-artificial-intelligence-letters-and-computer-motherboard.jpg",
    textoOrigem: "EconomicTimes - 18/12/2023",
    link: "https://economictimes.indiatimes.com/tech/technology/use-of-indian-languages-in-ai-will-bring-down-bias-in-technology-meity-secretary/articleshow/106099353.cms",
    diaPostagem: "18"
  },
  {
    tituloMateria: "Introdução ao JSX: HTML que faz JavaScript",
    textoMateria: "JSX foi introduzido como uma linguagem de modelo para o popular framework React. Fornece uma maneira de definir a estrutura de uma visualização de aplicativo com marcação HTML que interage com o contexto JavaScript do aplicativo. Essa noção simples vai contra a sabedoria convencional sobre separar a visão do comportamento, e é por isso que os desenvolvedores tendem a amá-la ou odiá-la...",
    imagem: "https://images.idgesg.net/images/idge/imported/imageapi/2023/01/19/04/shutterstock_1369501385-100936471-large.jpg?auto=webp&quality=85,70",
    textoOrigem: "InfoWorld - 13/12/2023",
    link: "https://www.infoworld.com/article/3711600/intro-to-jsx-html-that-does-javascript.html",
    diaPostagem: "13"
  },
  {
    tituloMateria: "Por que TYPE_CHECKING?",
    textoMateria: "Dado o potencial erro na hora de colocarmos um código para rodar precisamos inserir condicionais ou, mais especificamente, checadores para teste...",
    imagem: "https://github.com/veekaybee/veekaybee.github.io/assets/3837836/038f3695-4651-45e6-b47c-47ec25da9690",
    textoOrigem: "VickiBoykis - 11/12/2023",
    link: "https://vickiboykis.com/2023/12/11/why-if-type_checking/",
    diaPostagem: "11"
  },
  {
    tituloMateria: "Quer saber como criar um jogo da forca com Python e PySimpleGUI?",
    textoMateria: "Imagina construir um jogo da forca com uma interface gráfica de usuário (GUI) agradável em Python? Talvez você tenha criado uma versão de interface de usuário baseada em texto do Hangman e agora queira fazer um jogo ainda mais atraente...",
    imagem: "https://realpython.com/cdn-cgi/image/width=960,format=auto/https://files.realpython.com/media/Build-a-Hangman-Game-With-Python-and-PySimpleGUI_Watermarked.6ad1f5a8158d.jpg",
    textoOrigem: "RealPython - 06/12/2023",
    link: "https://realpython.com/hangman-python-pysimplegui/",
    diaPostagem: "06"
  },
  {
    tituloMateria: "Quer saber como funciona um gerenciador de senhas?",
    textoMateria: "Em nosso cotidiano, usamos diversos serviços que precisam de senha, como e-mail, rede social, aplicações usadas no trabalho... São tantas as opções que, depois de um tempo, fica difícil decorar todas as combinações,por isso a importância de recorrer a um gerenciador de senhas...",
    imagem: "https://tm.ibxk.com.br/2023/11/29/29151319216254.jpeg?ims=1280x480",
    textoOrigem: "Tecmundo - 03/12/2023",
    link: "https://www.tecmundo.com.br/seguranca/274356-funciona-gerenciador-senhas.htm",
    diaPostagem: "3"
  },
  {
    tituloMateria: "Quer saber mais sobreo lançamento da Javet 3.0.2 que irá unir Java e JavaScript?",
    textoMateria: "Javet, uma fusão de Java e V8 (JAVa + V + EighT), lançou recentemente sua versão 3.0.2, marcando um avanço significativo na incorporação de Node.js e V8 em Java...",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNIIjSwr7k4tc2t-dImsw4NUrGnmFRH3PxnPkDAhO_a0NwGsEj5T0gM5w-JzB8eJJLjqo&usqp=CAU",
    textoOrigem: "InfoQ.com - 01/12/2023",
    link: "https://www.infoq.com/news/2023/12/javet-302-released/",
    diaPostagem: "1"
  },
]

for (let i = 0; i < arrayPostagensJaneiro.length; i++){

// criar o elemento
const div = document.createElement("div")

// popular o elemento
div.innerHTML =
`<h3>${arrayPostagensJaneiro[i].tituloMateria}<p>${arrayPostagensJaneiro[i].textoMateria}</p>
<a class="saibaMais" href=${arrayPostagensJaneiro[i].link}" target="_blank">
Saiba mais</a></h3>
<a href="${arrayPostagensJaneiro[i].link}" target="_blank"><img height="200px" width="250px" 
src="${arrayPostagensJaneiro[i].imagem}">
<p>${arrayPostagensJaneiro[i].textoOrigem}</p>`


// adicionar o elemento ao DOM
const section = document.querySelector('section')
section.appendChild(div)
}

// criar o calendário
function criarCalendario() {
  let corpoTabela = document.getElementById('calendar').getElementsByTagName('tbody')[0];
  let hoje = new Date();
  let mesAtual = hoje.getMonth();
  let anoAtual = hoje.getFullYear();
  let diasDoMes = new Date(anoAtual, mesAtual + 1, 0).getDate();
  let primeiroDiaDoMes = new Date(anoAtual, mesAtual, 1).getDay();

  let contadorDia = 1;

  // definir o corpo da tabela
  corpoTabela.innerHTML = '';

  for (let i = 0; i < 6; i++) {
    let linhas = corpoTabela.insertRow(i);

    for (let j = 0; j < 7; j++) {
      let celula = linhas.insertCell(j);

      if (i === 0 && j < primeiroDiaDoMes) {
        // estilizar os dias do mês anterior
        let diasMesAnterior = new Date(anoAtual, mesAtual, 0).getDate();
        celula.innerHTML = diasMesAnterior - (primeiroDiaDoMes - j - 1);
        celula.classList.add('other-month');
        continue;
      }

      if (contadorDia > diasDoMes) {
        // estilizar os dias do mês posterior
        celula.innerHTML = contadorDia - diasDoMes;
        celula.classList.add('other-month');
        contadorDia++;
        continue;
      }

      celula.innerHTML = contadorDia;

      if (anoAtual === hoje.getFullYear() && mesAtual === hoje.getMonth() && contadorDia === hoje.getDate()) {
        // destacar o dia atual
        celula.classList.add('current-day');
      }

      contadorDia++;
    }
  }
}

// Função para destacar a semana ao passar o cursor
function destacarSemana(event) {
    // Limpando a cor de fundo de todas as células da tabela
    let todasCelulas = document.querySelectorAll('#calendar td');
    todasCelulas.forEach(celula => celula.style.backgroundColor = '');

    // Destacando a semana da célula pai da célula onde o cursor está
    let semana = event.target.parentNode;
    semana.childNodes.forEach(celula => celula.style.backgroundColor = '#555');
}

// Função para rolar a página até a postagem correspondente à semana clicada
function rolarParaPostagem(event) {
    // Obtendo a data da postagem correspondente à semana clicada
    let semanaClicada = event.target.parentNode;
    let dataSemanaClicada = semanaClicada.querySelector('.current-day').innerText;
    let idPostagem = dataSemanaClicada.replaceAll('/', '-');

    // Rolar até a postagem correspondente
    let elementoPostagem = document.getElementById(idPostagem);
    if (elementoPostagem) {
        elementoPostagem.scrollIntoView({ behavior: 'smooth' });
    }
}

// Adicionando os ouvintes de eventos às células da tabela
  let celulasTabela = document.querySelectorAll('#calendar td');
  celulasTabela.forEach(celula => {
   celula.addEventListener('mouseover', destacarSemana);
   celula.addEventListener('click', rolarParaPostagem);
  });

function mudarMes(delta) {
  mesAtual += delta;
  criarCalendario();
  atualizarConteudo();
}
// chamar as funções para inicializar o calendário e adicionar evento
criarCalendario();
adicionarEventoDestaque();
