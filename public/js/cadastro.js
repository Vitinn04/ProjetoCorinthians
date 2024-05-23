function cadastrar() {

    //Recupere o valor da nova input pelo nome do id
    // Agora vá para o método fetch logo abaixo
    var nomeVar = input_username.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmar_senha.value;
    var idoloFavVar = select_idolo.value;
    if (
        nomeVar == "" ||
        emailVar == "" ||
        senhaVar == "" ||
        confirmacaoSenhaVar == "" ||
        idoloFavVar == ""
    ) {
        // div_erro.style.display = "block";
        // div_erro.innerHTML =

        alert("Preencha todos os campos");

        return false;
    } else {
        setInterval(sumirMensagem, 2000);
    }

    // Enviando o valor da nova input
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            // crie um atributo que recebe o valor recuperado aqui
            // Agora vá para o arquivo routes/usuario.js
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            idoloServer: idoloFavVar
        }),
    })
        .then(function (resposta) {
            console.log("resposta: ", resposta);

            if (resposta.ok) {
                // div_erro.style.display = "block";
                // div_erro.innerHTML =
                alert("Cadastro realizado com sucesso! Redirecionando para tela de Login...");

                setTimeout(() => {
                    window.location = "../login.html";
                }, 2000);

                limparFormulario();
            } else {
                throw "Houve um erro ao tentar realizar o cadastro!";
            }
        })
        .catch(function (resposta) {
            console.log(`#ERRO: ${resposta}`);
        });

    return false;
}

function sumirMensagem() {
    div_erro.style.display = "none";
}

function fotoIdolo() {
    img_idolo.className = ""
    var num_idolo = select_idolo.value;

    if (num_idolo == 1) {
        img_idolo.classList.add("cassio")
    } else if (num_idolo == 2) {
        img_idolo.classList.add("rivelino")
    } else if (num_idolo == 3) {
        img_idolo.classList.add("socrates")
    } else if (num_idolo == 4) {
        img_idolo.classList.add("zanotti")
    } else if (num_idolo == 5) {
        img_idolo.classList.add("tamires")
    } else if (num_idolo == 6) {
        img_idolo.classList.add("leticia")
    } else if (num_idolo == 7) {
        img_idolo.classList.add("fagner")
    } else if (num_idolo == 8) {
        img_idolo.classList.add("emerson")
    } else if (num_idolo == 9) {
        img_idolo.classList.add("zeMaria")
    } else if (num_idolo == 10) {
        img_idolo.classList.add("grazi")
    } else if (num_idolo == 11) {
        img_idolo.classList.add("portilho")
    } else {
        img_idolo.classList.add("tarciane")
    }
}