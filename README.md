# codigo-e-cafe

Nós, do grupo 2 (B) começamos pelo esqueleto do site com a proposta de ser um blog voltado à divulgação de tecnologias de programação.
Fizemos um primeiro esboço utilizando o site figma.com e fizemos esse primeiro modelo conforme linkado abaixo:

https://www.figma.com/file/1X3popV4LQJKSQHEcFpiVW/SPRINT-1

Posteriormente seguimos para uma parte de pensar o visual do blog e fizemos o primeiro modelo utilizando também do figma conforme linkado acaixo:

https://www.figma.com/file/kkItYgeKbRD4cFymVaGDbP/Template_blogTI?type=design&node-id=1-2&mode=design&t=dMA6uo3VpOM8EB7i-0

No terceiro momento partimos para as linhas de código HTML e replicamos o modelo feito na aula 11.

Abaixo segue o começo das linhas de comando:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Código e Café</title>
</head>
<body>
  <main>
    <img
    src="img/Blog TI..jpg"
    alt="Imagem retratando as tantas opções de códigos de programação"
    />
    <nav>
        <ul>
          <button><li><a href="noticias_da_semana.html">Notícias da Semana</a></li></button>      
          <button><li><a href="dicas_e_tutoriais.html">Dicas e Tutoriais</a></li></button>      
          <button><li><a href="cursos.html">Cursos</a></li></button>
          <button><li><a href="historia_da_programacao.html">História da Programação</a></li></button> 
          <button><li><a href="sobre_quem_somos.html">Sobre Quem Somos</a></li></button> 
                  
        </ul>
      </nav>
      
    <h1>Bem-vindo ao nosso blog!</h1>
    <section>
      <h2>Saiba mais</h2>
      <p>Deseja saber mais sobre programação? 
        Pensa em uma nova formação? 
        Venha conosco!</p>
    </section>
  </main>
  <footer>
    <img 
    src="./img/caneca-codigo-cafe-presente.jpg" 
    alt="Logo colorido da empresa Código&Café"
    />
    <ul>
      <li>Facebook</li>
      <li>Instagram</li>
      <li>Linkedin</li>
    </ul>
  </footer>
  <p>Copyright © 2023 Blog Código & Café. 
    Todos os direitos reservados.</p>
</body>
</html>

No quarto momento percebemos que do site figma.com podemos exportar o código CSS referente a cada elemento gráfico e textual composto pelas ferramentas do site. Nesse momento pretendemos compor a disposição dos componentes visuais a partir desse diálogo entre o CSS vindo do figma.com e o código HTML utilizando do Vscode.
