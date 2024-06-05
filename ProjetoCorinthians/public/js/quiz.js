const questao = document.querySelector(".questao");
const alternativas = document.querySelector(".alternativas");
const spnQtd = document.querySelector(".spnQtd");
const finalizarTexto = document.querySelector(".finalizar span");
const conteudo = document.querySelector(".conteudo");
const finalizarConteudo = document.querySelector(".finalizar");
const btnReiniciar = document.querySelector(".finalizar button");

import questoes from "./questoes.js";

var indexAtual = 0;
var questoesCorretas = 0;

btnReiniciar.onclick = () => {
    conteudo.style.display = "flex";
    finalizarConteudo.style.display = "none";

    indexAtual = 0;
    questoesCorretas = 0;
    carregarQuestao();
};

function proximaQuestao(e) {
    if (e.target.getAttribute("data-correct") === "true") {
        questoesCorretas++;
    }

    if (indexAtual < questoes.length - 1) {
        indexAtual++;
        carregarQuestao();
    } else {
        finalizar();
    }
}

function carregarQuestao() {
    spnQtd.innerHTML = `${indexAtual + 1}/${questoes.length}`;
    const item = questoes[indexAtual];
    alternativas.innerHTML = "";
    questao.innerHTML = item.questao;

    item.alternativas.forEach((alternativa) => {
        const button = document.createElement("button");
        button.classList.add("alternativas");
        button.setAttribute("data-correct", alternativa.correto);
        button.textContent = alternativa.opcao;
        button.onclick = proximaQuestao;

        const div = document.createElement("div");
        div.appendChild(button);
        alternativas.appendChild(div);
    });
}

function finalizar() {
    finalizarTexto.innerHTML = `Você acertou ${questoesCorretas} de ${questoes.length}`;
    conteudo.style.display = "none";
    finalizarConteudo.style.display = "flex";
}

carregarQuestao();
