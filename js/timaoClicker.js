var click = 0;
var bolinhas = 0;
var neoQuimica = 0;
var parqueSaoJorge = 0;
var cassioRamos = 0;
var preçoNeoQuimica = 50;
var preçoCassioRamos = 75;
var preçoParqueSaoJorge = 100;
var tempoGerarBolinhas = 10000;
var tempo = 0;
var tempoFinal = 0;
var historico = [];
var jogarNovamente = false;

function jogar() {
    tempo = new Date();
}

function jogarNovamente() {
    jogarNovamente = true;
    if (jogarNovamente == true) {
        neoQuimica = 0;
        cassioRamos = 0;
        parqueSaoJorge = 0;
        bolinhas = 0;
        click = 0;
        jogar()
    }
}

function escudo() {
    click++;
    if (cassioRamos != 0) {
        bolinhas += cassioRamos * 1.5;
    } else {
        bolinhas++;
    }
    div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas.toFixed(2)} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`
}

function comprarNeoQuimica() {
    if (bolinhas >= preçoNeoQuimica) {
        bolinhas -= preçoNeoQuimica;
        if (neoQuimica < 50) {
            neoQuimica++;
        }
        else {
            neoQuimica = 50;
        }
        preçoNeoQuimica += preçoNeoQuimica / 12;
        div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas.toFixed(2)} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`

    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoNeoQuimica - bolinhas} bolinhas`)
    }

    if (neoQuimica == 50 && cassioRamos == 50 && parqueSaoJorge == 50) {
        tempoFinal = tempo - new Date();
        tempoFinal = tempoFinal * 1000 * 60 * 60;
        historico.push(tempoFinal);
        jogoFinalizado.innerHTML = `Você deu ${click} click's Tempo:${tempoFinal}`
    }
}

function comprarParqueSaoJorge() {
    if (bolinhas >= preçoParqueSaoJorge) {
        bolinhas -= preçoParqueSaoJorge;
        if (parqueSaoJorge < 50) {
            parqueSaoJorge++;
        }
        else {
            parqueSaoJorge = 50;
        }
        preçoParqueSaoJorge += preçoParqueSaoJorge / 12;
        tempoGerarBolinhas -= 100;
        div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas.toFixed(2)} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`
    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoParqueSaoJorge - bolinhas} bolinhas`)
    }

    if (neoQuimica == 50 && cassioRamos == 50 && parqueSaoJorge == 50) {
        tempoFinal = tempo - new Date();
        tempoFinal = tempoFinal * 1000 * 60 * 60;
        historico.push(tempoFinal);
        jogoFinalizado.innerHTML = `Você deu ${click} click's Tempo:${tempoFinal}`
    }
}

function comprarCassioRamos() {
    if (bolinhas >= preçoCassioRamos) {
        bolinhas -= preçoCassioRamos;
        if (cassioRamos < 50) {
            cassioRamos++;
        }
        else {
            cassioRamos = 50;
        }
        preçoCassioRamos += preçoCassioRamos / 12;
        div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas.toFixed(2)} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`
    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoCassioRamos - bolinhas} bolinhas`)
    }

    if (neoQuimica == 50 && cassioRamos == 50 && parqueSaoJorge == 50) {
        tempoFinal = tempo - new Date();
        tempoFinal = tempoFinal * 1000 * 60 * 60;
        historico.push(tempoFinal);
        jogoFinalizado.innerHTML = `Você deu ${click} click's Tempo:${tempoFinal}`
    }
}

setInterval(function gerandoBolinhas() {
    bolinhas += neoQuimica * 1.5;
}, tempoGerarBolinhas);

function voltarInicio() {
    location.reload();
}