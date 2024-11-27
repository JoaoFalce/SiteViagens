const imgsContainer = document.querySelector(".carrossel-container");
const imgs = document.querySelectorAll(".carrossel-container a");
let idx = 0;

function carrossel() {
  // Oculta todas as imagens
  imgs.forEach((img, i) => {
    img.style.display = "none"; // Define como 'none' para ocultar
  });

  // Mostra a imagem atual
  imgs[idx].style.display = "block"; // Mostra a imagem atual

  // Atualiza o índice
  idx++;

  // Reinicia o índice se ultrapassar o total de imagens
  if (idx >= imgs.length) {
    idx = 0;
  }
}

// Exibe a primeira imagem inicialmente
carrossel();

// Muda a imagem a cada 5 segundos
setInterval(carrossel, 5000);

//POPUP ABAIXO

// Seleciona o popup e o botão de fechar
const popup = document.querySelector(".popup");
const closeBtn = document.querySelector(".popup-close");

// Função para exibir o popup
function showPopup() {
  popup.style.display = "flex"; // Define o estilo display como 'flex' para exibir o popup
}

// Adiciona um evento ao botão de fechar para ocultar o popup ao ser clicado
closeBtn.addEventListener("click", () => {
  popup.style.display = "none"; // Define o estilo display como 'none' para esconder o popup
});
