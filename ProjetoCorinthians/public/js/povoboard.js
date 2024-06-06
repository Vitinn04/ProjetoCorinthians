const dash = document.getElementById("dash");

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

function maisEscolhido() {
  fetch(`/povoboardRoutes/maisEscolhido`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (resposta) {
    console.log("ESTOU NO THEN DO maisEscolhido()!")

    if (resposta.ok) {
      console.log(resposta);
      resposta.json().then((json) => {
        console.log(jogadorFavorito = json.jogadorFavorito)

        jogadorFavorito = json.jogadorFavorito;

        if (jogadorFavorito == 1) {
          imgJogadorFavorito.classList.add("cassio")
        } else if (jogadorFavorito == 2) {
          imgJogadorFavorito.classList.add("rivelino")
        } else if (jogadorFavorito == 3) {
          imgJogadorFavorito.classList.add("socrates")
        } else if (jogadorFavorito == 4) {
          imgJogadorFavorito.classList.add("zanotti")
        } else if (jogadorFavorito == 5) {
          imgJogadorFavorito.classList.add("tamires")
        } else if (jogadorFavorito == 6) {
          imgJogadorFavorito.classList.add("leticia")
        } else if (jogadorFavorito == 7) {
          imgJogadorFavorito.classList.add("fagner")
        } else if (jogadorFavorito == 8) {
          imgJogadorFavorito.classList.add("emerson")
        } else if (jogadorFavorito == 9) {
          imgJogadorFavorito.classList.add("zeMaria")
        } else if (jogadorFavorito == 10) {
          imgJogadorFavorito.classList.add("grazi")
        } else if (jogadorFavorito == 11) {
          imgJogadorFavorito.classList.add("portilho")
        } else if (jogadorFavorito == 12) {
          imgJogadorFavorito.classList.add("tarciane")
        }

      });
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });

}

function mediaClick() {
  fetch(`/povoboardRoutes/mediaClick`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (resposta) {
    console.log("ESTOU NO THEN DO mediaClick()!")

    if (resposta.ok) {
      console.log(resposta);
      resposta.json().then((json) => {
        console.log(media = json.media)

        var media = json.media;

        numeroMedia.innerHTML = `${media}`;
      });
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });

}

function ranking() {
  fetch(`/povoboardRoutes/ranking`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function (resposta) {
    console.log("ESTOU NO THEN DO ranking()!")

    if (resposta.ok) {
      console.log(resposta);
      resposta.json().then((json) => {
        console.log(json.rankingNome, json.rankingTempo)

        ranking1.innerHTML = `1° ${json.rankingNome} - ${json.rankingTempo}`;
        ranking2.innerHTML = `2° ${json.rankingNome} - ${json.rankingTempo}`;
        ranking3.innerHTML = `3° ${json.rankingNome} - ${json.rankingTempo}`;
      });
    } else {
      console.log("Houve um erro ao tentar realizar a requisição!");
    }
  });

}

