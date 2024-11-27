document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".formulario");
  const mensagemConfirmacao = document.getElementById("mensagem-confirmacao");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio real do formulário
    mensagemConfirmacao.textContent =
      "Formulário enviado com sucesso! Obrigado por reservar conosco.";
    mensagemConfirmacao.style.display = "block"; // Exibe a mensagem
    form.reset(); // Limpa o formulário
  });
});

// Define o preço base para a classe econômica
let basePreco = 200; // Preço base para classe econômica

// Define a classe padrão selecionada como "economica"
let selectedClass = "economica"; // Classe padrão

// Função que atualiza a quantidade de passageiros e recalcula o preço total
function updatePassengers(count) {
  // Atualiza o número de passageiros exibido na interface
  document.getElementById("passengerCount").innerText = count;

  // Chama a função de cálculo do preço total após a mudança no número de passageiros
  calculateTotal();
}

// Função que altera a classe de voo selecionada
function selectClass(classType) {
  // Atualiza a classe selecionada com base no tipo de classe escolhido
  selectedClass = classType;

  // Ajusta o preço base conforme a classe escolhida
  switch (classType) {
    case "economica": // Se a classe for econômica
      basePreco = 200; // Define o preço base para a classe econômica
      break;
    case "executiva": // Se a classe for executiva
      basePreco = 500; // Define o preço base para a classe executiva
      break;
    case "primeira": // Se a classe for primeira classe
      basePreco = 1000; // Define o preço base para a primeira classe
      break;
  }

  // Atualiza a interface para refletir a classe selecionada
  // Todos os botões de classe são restaurados para a cor padrão
  document.querySelectorAll(".class-button").forEach((button) => {
    button.style.backgroundColor = "#007bff"; // Cor padrão dos botões
  });

  // Destaca o botão da classe selecionada com uma cor mais escura
  event.target.style.backgroundColor = "#0056b3"; // Cor do botão da classe selecionada

  // Após a alteração da classe, chama a função para recalcular o preço total
  calculateTotal();
}

// Função que calcula o preço total com base no número de passageiros e outros fatores
function calculateTotal() {
  // Obtém o número de passageiros inserido no campo de input
  const passengers = parseInt(document.getElementById("passengers").value);

  // Verifica se a opção de bagagem extra foi marcada e define o preço adicional (50)
  const extraLuggage = document.getElementById("extraLuggage").checked ? 50 : 0;

  // Verifica se a opção de seguro de viagem foi marcada e define o preço adicional (20)
  const travelInsurance = document.getElementById("travelInsurance").checked
    ? 20
    : 0;

  // Calcula o preço total
  // O preço total é calculado multiplicando o preço base (de acordo com a classe) pelo número de passageiros,
  // e somando os preços adicionais de bagagem extra e seguro de viagem
  const totalPrice = (basePreco + extraLuggage + travelInsurance) * passengers;

  // Exibe o preço total formatado como moeda
  document.getElementById("totalPrice").innerText = `R$ ${totalPrice.toFixed(
    2
  )}`;
}
