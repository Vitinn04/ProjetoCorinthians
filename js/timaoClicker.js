var click = 0;
var bolinhas = 0;
var neoQuimica = 0;
var parqueSaoJorge = 0;
var cassioRamos = 0;
var preçoNeoQuimica = 50;
var preçoParqueSaoJorge = 75;
var preçoCassioRamos = 100;
var tempoGerarBolinhas = 10000;
var tempo = 0;
var tempoFinal = 0;
var tempoFinalMilessegundo = 0;
var tempoFinalHoras = 0;
var historico = [];

function jogar() {
    tempo = new Date();
    cortina.classList.add('desaparecer')
    cortina2.classList.remove('desaparecer')
}

function jogarNovamente() {
    cortina3.classList.add('desaparecer')
    cortina2.classList.remove('desaparecer')
    printImgNeo.innerHTML = '';
    printImgParque.innerHTML = '';
    printImgCassio.innerHTML = '';
    click = 0;
    bolinhas = 0;
    neoQuimica = 0;
    parqueSaoJorge = 0;
    cassioRamos = 0;
    preçoNeoQuimica = 50;
    preçoParqueSaoJorge = 75;
    preçoCassioRamos = 100;
    tempoGerarBolinhas = 10000;
    tempo = new Date();
    escudo()
}

function escudo() {
    click++;
    if (cassioRamos != 0) {
        bolinhas += cassioRamos * 1.5;
    } else {
        bolinhas++;
    }
    bolinha.innerHTML = `<img src="../assets/img/bola-de-futebol-icon.png" alt=""> ${bolinhas.toFixed(1)}`;
    neoQuimicaHtml.innerHTML = `${neoQuimica}`;
    parqueSaoJorgeHtml.innerHTML = `${parqueSaoJorge}`;
    cassioRamosHtml.innerHTML = `${cassioRamos}`;
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
        bolinha.innerHTML = `<img src="../assets/img/bola-de-futebol-icon.png" alt=""> ${bolinhas.toFixed(1)}`;
        neoQuimicaHtml.innerHTML = `${neoQuimica}`;
        parqueSaoJorgeHtml.innerHTML = `${parqueSaoJorge}`;
        cassioRamosHtml.innerHTML = `${cassioRamos}`;
        printImgNeo.innerHTML = "";
        if (neoQuimica >= 10) {
            printImgNeo.innerHTML += `<img src="../assets/img/neoQuimicaJogo.png" alt="">`
        }
        if (neoQuimica >= 20) {
            printImgNeo.innerHTML += `<img src="../assets/img/neoQuimicaJogo.png" alt="">`
        }
        if (neoQuimica >= 30) {
            printImgNeo.innerHTML += `<img src="../assets/img/neoQuimicaJogo.png" alt="">`
        }
        if (neoQuimica >= 40) {
            printImgNeo.innerHTML += `<img src="../assets/img/neoQuimicaJogo.png" alt="">`
        }
        if (neoQuimica == 50) {
            printImgNeo.innerHTML += `<img src="../assets/img/neoQuimicaJogo.png" alt="">`
        }
    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoNeoQuimica - bolinhas} bolinhas`)
    }

    if (neoQuimica == 50 && cassioRamos == 50 && parqueSaoJorge == 50) {
        tempoFinalMilessegundo = Math.abs(new Date() - tempo);
        tempoFinal = 1000 * 60 * 60;
        tempoFinalHoras = tempoFinalMilessegundo / tempoFinal;
        historico.push(tempoFinalHoras);
        cortina2.classList.add('desaparecer')
        cortina3.classList.remove('desaparecer')
        jogoFinalizado.innerHTML = `Você deu ${click} click's Tempo:${tempoFinalHoras.toFixed(2)}`
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
        bolinha.innerHTML = `<img src="../assets/img/bola-de-futebol-icon.png" alt=""> ${bolinhas.toFixed(1)}`;
        neoQuimicaHtml.innerHTML = `${neoQuimica}`;
        parqueSaoJorgeHtml.innerHTML = `${parqueSaoJorge}`;
        cassioRamosHtml.innerHTML = `${cassioRamos}`;
        printImgParque.innerHTML = "";
        if (parqueSaoJorge >= 10) {
            printImgParque.innerHTML += `<img src="../assets/img/parqueSãoJorgeJogo.png" alt="">`
        }
        if (parqueSaoJorge >= 20) {
            printImgParque.innerHTML += `<img src="../assets/img/parqueSãoJorgeJogo.png" alt="">`
        }
        if (parqueSaoJorge >= 30) {
            printImgParque.innerHTML += `<img src="../assets/img/parqueSãoJorgeJogo.png" alt="">`
        }
        if (parqueSaoJorge >= 40) {
            printImgParque.innerHTML += `<img src="../assets/img/parqueSãoJorgeJogo.png" alt="">`
        }
        if (parqueSaoJorge == 50) {
            printImgParque.innerHTML += `<img src="../assets/img/parqueSãoJorgeJogo.png" alt="">`
        }
    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoParqueSaoJorge - bolinhas} bolinhas`)
    }

    if (neoQuimica == 50 && cassioRamos == 50 && parqueSaoJorge == 50) {
        tempoFinalMilessegundo = Math.abs(new Date() - tempo);
        tempoFinal = 1000 * 60 * 60;
        tempoFinalHoras = tempoFinalMilessegundo / tempoFinal;
        historico.push(tempoFinalHoras);
        cortina2.classList.add('desaparecer')
        cortina3.classList.remove('desaparecer')
        jogoFinalizado.innerHTML = `Você deu ${click} click's Tempo:${tempoFinalHoras.toFixed(2)}`
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
        bolinha.innerHTML = `<img src="../assets/img/bola-de-futebol-icon.png" alt=""> ${bolinhas.toFixed(1)}`;
        neoQuimicaHtml.innerHTML = `${neoQuimica}`;
        parqueSaoJorgeHtml.innerHTML = `${parqueSaoJorge}`;
        cassioRamosHtml.innerHTML = `${cassioRamos}`;
        printImgCassio.innerHTML = "";
        if (cassioRamos >= 10) {
            printImgCassio.innerHTML += `<img src="../assets/img/cassioJogo.png" alt="">`
        }
        if (cassioRamos >= 20) {
            printImgCassio.innerHTML += `<img src="../assets/img/cassioJogo.png" alt="">`
        }
        if (cassioRamos >= 30) {
            printImgCassio.innerHTML += `<img src="../assets/img/cassioJogo.png" alt="">`
        }
        if (cassioRamos >= 40) {
            printImgCassio.innerHTML += `<img src="../assets/img/cassioJogo.png" alt="">`
        }
        if (cassioRamos == 50) {
            printImgCassio.innerHTML += `<img src="../assets/img/cassioJogo.png" alt="">`
        }
    } else {
        alert(`Você não tem a quantidade de bolinhas nescessarias você precisa de mais ${preçoCassioRamos - bolinhas} bolinhas`)
    }

    if (neoQuimica == 50 && cassioRamos == 50 && parqueSaoJorge == 50) {
        tempoFinalMilessegundo = Math.abs(new Date() - tempo);
        tempoFinal = 1000 * 60 * 60;
        tempoFinalHoras = tempoFinalMilessegundo / tempoFinal;
        historico.push(tempoFinalHoras);
        cortina2.classList.add('desaparecer')
        cortina3.classList.remove('desaparecer')
        jogoFinalizado.innerHTML = `Você deu ${click} click's Tempo:${tempoFinalHoras.toFixed(2)}`
    }
}

setInterval(function gerandoBolinhas() {
    bolinhas += neoQuimica * 1.5;
}, tempoGerarBolinhas);

function voltarInicio() {
    location.reload();
}