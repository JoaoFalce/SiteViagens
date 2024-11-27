// Aguarda o carregamento da página para ativar o script
document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript carregado e funcionando!");

  const table = document.getElementById("price-table");
  const tableBody = document.getElementById("price-table-body");

  // Botão de Buscar
  document.getElementById("search-btn").addEventListener("click", () => {
    const destino = document
      .getElementById("destino")
      .value.trim()
      .toLowerCase();

    if (!destino) {
      alert("Por favor, insira um destino para buscar!");
      return;
    }

    const rows = tableBody.querySelectorAll("tr");
    let encontrouResultado = false;

    // Limpa a exibição de resultados anteriores
    rows.forEach((row) => {
      const cellDestino = row.cells[0].textContent.toLowerCase();
      if (cellDestino.includes(destino)) {
        row.style.display = ""; // Mostra linhas correspondentes
        encontrouResultado = true;
      } else {
        row.style.display = "none"; // Oculta linhas não correspondentes
      }
    });

    if (encontrouResultado) {
      table.style.display = "table"; // Exibe a tabela se houver resultados
    } else {
      table.style.display = "none"; // Esconde a tabela se não houver resultados
      alert("Nenhum resultado encontrado para o destino pesquisado!");
    }

    document.getElementById("destino").value = ""; // Limpa o campo de busca
  });

  // Botão de Resetar
  document.getElementById("reset-btn").addEventListener("click", () => {
    const rows = tableBody.querySelectorAll("tr");
    rows.forEach((row) => {
      row.style.display = ""; // Mostra todas as linhas
    });

    table.style.display = "none"; // Esconde a tabela novamente
    document.getElementById("destino").value = ""; // Limpa o campo de busca
  });
});
