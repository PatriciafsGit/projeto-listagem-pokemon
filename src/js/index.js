const botaoAlterarTema = document.getElementById("botao-alterar-tema"); 
const body = document.querySelector("body");

const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

botaoAlterarTema.addEventListener("click", () => {
body.classList.toggle("modo-escuro");
imagemBotaoTrocaDeTema.setAttribute("src","./src/imagem/moon.png");

const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");

if (modoEscuroEstaAtivo) {
  imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/moon.png");
} else {
  imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagem/sun.png");
}
});


