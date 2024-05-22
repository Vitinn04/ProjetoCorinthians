const dash = document.getElementById("dash");

nome_usuario.innerHTML = sessionStorage.NOME_USUARIO;
// foto_perfil.innerHTML = `${}`;

new Chart(dash, {
  type: "bar",
  data: {
    labels: ['Cassio', 'Fagner', 'Emerson', 'Zanotti', 'Zé Maria', 'Portilho', 'Grazi', 'Socrates', 'Rivelino', 'Tamires', 'Leticia', 'Tarciane'],
    datasets: [
      {
        label: "Jogador Favorito",
        data: [50, 45, 39, 33, 29, 24, 22, 19, 14, 12, 1, 0],
        borderWidth: 1,
        backgroundColor: "#fff",
        borderColor: "#D72327",
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: "Número de escolhas", // Título do eixo X
          font: {
            weight: "bold", // Estilo da fonte (negrito)
            size: 20, // Tamanho da fonte
            family: "Arial", // Tipo de fonte
          },
          padding: {
            // Preenchimento do título
            top: 10,
            bottom: 10,
          },
        },
      },
      y: {
        display: false, // Ocultar escala do eixo Y
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top", // Posição da legenda
      },
    },
  },
});