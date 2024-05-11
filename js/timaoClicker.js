var click = 0;
var bolinhas = 0;
var neoQuimica = 0;
var cassioRamos = 0;
var parqueSaoJorge = 0;
var preçoNeoQuimica = 50;
var preçoCassioRamos = 75;
var preçoParqueSaoJorge = 100;
var tempoGerarBolinhas = 10000;

function escudo() {
    click++;
    if(cassioRamos != 0){
        bolinhas += cassioRamos * 1.5; 
    }else {
        bolinhas++;
    }
    div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`
}

function comprarNeoQuimica() {
    if (bolinhas >= preçoNeoQuimica) {
        bolinhas -= preçoNeoQuimica;
        neoQuimica++;
        preçoNeoQuimica += preçoNeoQuimica / 12;
        div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`

    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoNeoQuimica - bolinhas} bolinhas`)
    }
}

function comprarCassioRamos() {
    if (bolinhas >= preçoCassioRamos) {
        bolinhas -= preçoCassioRamos;
        cassioRamos++;
        preçoCassioRamos += preçoCassioRamos / 12; 
        div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`
    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoCassioRamos - bolinhas} bolinhas`)
    }
}

function comprarParqueSaoJorge() {
    if (bolinhas >= preçoParqueSaoJorge) {
        bolinhas -= preçoParqueSaoJorge;
        parqueSaoJorge++;
        preçoParqueSaoJorge /= preçoParqueSaoJorge / 12;
        tempoGerarBolinhas -= 100
        div_mensagem.innerHTML = `Você já deu ${click} click's, tem ${bolinhas} bolinhas, possui ${neoQuimica} Neo Quimica, ${parqueSaoJorge} Parque São Jorge e ${cassioRamos} Cassio Ramos`
    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoParqueSaoJorge - bolinhas} bolinhas`)
    }
}

setInterval(function gerandoBolinhas() {
    bolinhas += neoQuimica * 1.5;
}, tempoGerarBolinhas);

