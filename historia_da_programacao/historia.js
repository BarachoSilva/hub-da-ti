const arrayHistoria = [
    {
      titulo: "Ada Lovelace",
      texto: "Nos anos de 1800, existia uma mulher extraordinária chamada Ada Lovelace, conhecida como a rainha da matemática. Ela se tornou a primeira programadora da história ao colaborar com Charles Babbage, o inventor da Máquina Analítica.Juntos, eles conceberam ideias revolucionárias e desenvolveram algoritmos que poderiam ser executados nessa máquina. Ada Lovelace deu início à era da programação, provando que as mulheres também são talentosas e influentes no mundo da tecnologia.",
      imagem: "./img/ada.webp",
      legenda:"Clique aqui para saber mais",
      link: "https://www.google.com/search?q=Ada+Lovelace"
    },

    {
      titulo: "HTML",
      texto: "O HTML (HyperText Markup Language) foi criado no início dos anos 90 por Tim Berners-Lee e Robert Cailliau. Eles desenvolveram essa linguagem para estruturar e organizar o conteúdo das páginas da web, permitindo a criação de títulos, parágrafos e outros elementos usando tags como < h1> e < p>. O HTML é considerado a base fundamental do design visual das páginas na internet e ainda é amplamente utilizado hoje em dia. Essa inovação revolucionou a forma como as informações são apresentadas na web, sendo essencial para a criação de sites modernos.",
      imagem: "./img/html.webp",
      legenda:"Clique aqui para saber mais",
      link: "https://www.google.com/search?q=historia+do+html"
    },

    {
      titulo: "JavaScript",
      texto: "No auge do crescimento da web, Brendan Eich e uma equipe de engenheiros da Netscape Communications Corporation criaram o JavaScript em 1995. Essa linguagem revolucionou a interatividade online, permitindo que as páginas ganhassem vida com elementos que se movem e interagem diretamente no navegador. Desde então, praticamente todos os sites utilizam o poder do JavaScript para oferecer recursos incríveis, elevando a experiência online a um novo patamar. A visão e trabalho desses desenvolvedores transformaram a forma como as páginas da web podem ser interativas e dinâmicas.",
      imagem: "./img/javascript.avif",
      legenda: "Clique aqui para saber mais",
      link: "https://www.google.com/search?q=historia+do+javascript"
    },

    {
      titulo: "CSS",
      texto: "Quando a web ainda era um pouco monótona, o CSS entrou em cena para adicionar estilo e tornar as páginas web mais atraentes. Foi uma verdadeira revolução fashion na internet! Com o CSS, foi possível transformar completamente o visual das páginas, adicionando cores, ajustando layouts e deixando tudo mais apresentável. O CSS é como um estilista para as páginas web, trazendo um visual descolado que todos adoram. Graças ao CSS, a web se tornou mais estilosa e organizada.",
      imagem: "./img/css.jpeg",
      legenda:"Clique aqui para saber mais",
      link: "https://www.google.com/search?q=historia+do+css"
    },

    {
      titulo: "Python",
      texto: "No início dos anos 2000, Python surgiu como uma linguagem de programação amigável e descontraída, tornando-se um verdadeiro herói para os desenvolvedores. Com sua simplicidade e versatilidade, Python é amplamente utilizado para uma variedade de aplicações, desde o desenvolvimento de sites até a criação de sistemas de inteligência artificial. É como um canivete suíço da programação, capaz de fazer de tudo e com uma abordagem tranquila e descomplicada. Python é o amigo que está sempre pronto para te ajudar em qualquer projeto.",
      imagem: "./img/python.jpeg",
      legenda:"Clique aqui para saber mais",
      link: "https://www.google.com/search?q=historia+do+python"
    },

  ]
  
  for (let i = 0; i < arrayHistoria.length; i++){
  
  const div = document.createElement("div")
  div.id=`post-${[i + 1]}`
    
  div.innerHTML =
  `<h3><p>${arrayHistoria[i].titulo}</p>${arrayHistoria[i].texto}</h3>
  <a href="${arrayHistoria[i].link}"target="_blank"><img height="250px" width="600px" src="${arrayHistoria[i].imagem}"><p>${arrayHistoria[i].legenda}</p>`

  const section = document.querySelector('section')
  section.appendChild(div)
  
  }
