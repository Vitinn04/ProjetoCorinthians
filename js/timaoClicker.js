var click = 0;
var bolinhas = 0;
var neoQuimica = 0;
var cassioRamos = 0;
var parqueSaoJorge = 0;
var preçoNeoQuimica = 50;
var preçoCassioRamos = 75;
var preçoParqueSaoJorge = 100;
var tempoGerarBolinhas = 10000;
var time = 0;
var jogarNovamente = false;

function jogar() {
    time = new Date();
}

function escudo() {
    click++;
    if (cassioRamos != 0) {
        bolinhas += cassioRamos * 1.5;
    } else {
        bolinhas++;
    }
    div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas.toFixed(2)} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`

    if (neoQuimica >= 50 && cassioRamos >= 50 && parqueSaoJorge >= 50) {
        div_mensagem.innerHTML = `Parabens você zerou o jogo!! você agr é um verdadeiro CORINTHIANO <br>
        Deseja jogar novamente?`
        time -= new Date();

        if (jogarNovamente == true) {
            neoQuimica = 0;
            cassioRamos = 0;
            parqueSaoJorge = 0;
        }
    }
}

function comprarNeoQuimica() {
    if (bolinhas >= preçoNeoQuimica) {
        bolinhas -= preçoNeoQuimica;
        neoQuimica++;
        preçoNeoQuimica += preçoNeoQuimica / 12;
        div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas.toFixed(2)} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`

    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoNeoQuimica - bolinhas} bolinhas`)
    }
}

function comprarCassioRamos() {
    if (bolinhas >= preçoCassioRamos) {
        bolinhas -= preçoCassioRamos;
        cassioRamos++;
        preçoCassioRamos += preçoCassioRamos / 12;
        div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas.toFixed(2)} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`
    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoCassioRamos - bolinhas} bolinhas`)
    }
}

function comprarParqueSaoJorge() {
    if (bolinhas >= preçoParqueSaoJorge) {
        bolinhas -= preçoParqueSaoJorge;
        parqueSaoJorge++;
        preçoParqueSaoJorge += preçoParqueSaoJorge / 12;
        tempoGerarBolinhas -= 100
        div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas.toFixed(2)} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`
    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoParqueSaoJorge - bolinhas} bolinhas`)
    }
}

setInterval(function gerandoBolinhas() {
    bolinhas += neoQuimica * 1.5;
}, tempoGerarBolinhas);

