function cadastrar() {
    var nomeVar = input_username.value;
    var emailVar = input_email.value;
    var senhaVar = input_senha.value;
    var confirmacaoSenhaVar = input_confirmar_senha.value;
    var idoloFavVar = select_idolo.value;

    if (nomeVar == "" || emailVar == "" || senhaVar == "" || confirmacaoSenhaVar == "" || idoloFavVar == "") {
        alert("Preencha todos os campos");
        return false;
    }

    if (!validarNome() || !validarEmail() || !validarSenha()) {
        return false;
    }

    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nomeServer: nomeVar,
            emailServer: emailVar,
            senhaServer: senhaVar,
            idoloServer: idoloFavVar
        }),
    })
    .then(function (resposta) {
        console.log("resposta: ", resposta);

        if (resposta.ok) {
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

function validarNome() {
    var nomeGestor = input_username.value;
    var mensagemNome = '';

    if (nomeGestor.length < 3 || nomeGestor.length >= 20) {
        mensagemNome = 'Nome deve ter mais que 3 caracteres e menos que 20.';
        div_mensagemNome.innerHTML = mensagemNome;
        return false;
    } else {
        div_mensagemNome.innerHTML = '';
        return true;
    }
}

function validarEmail() {
    var email = input_email.value;
    var mensagemEmail = '';
    var emailCom = email.endsWith('.com');
    var emailArroba = email.indexOf("@") > 0;
    
    if (!emailCom || !emailArroba) {
        mensagemEmail = 'Email inválido';
        div_mensagemEmail.innerHTML = mensagemEmail;
        return false;
    } else {
        div_mensagemEmail.innerHTML = '';
        return true;
    }
}

function validarSenha() {
    var senha = input_senha.value;
    var confirmarSenha = input_confirmar_senha.value;
    var mensagemSenha = '';
    
    if (senha.length < 6) {
        mensagemSenha = 'Senha deve ter no mínimo 6 caracteres.';
        div_mensagemSenha.innerHTML = mensagemSenha;
        return false;
    } else {
        div_mensagemSenha.innerHTML = '';
    }
    
    if (confirmarSenha !== senha) {
        div_mensagemConfirmaeSenha.innerHTML = 'Senha não é igual';
        return false;
    } else {
        div_mensagemConfirmaeSenha.innerHTML = '';
    }

    return true;
}

input_username.addEventListener('input', function() {
    validarNome();
});

input_email.addEventListener('input', function() {
    validarEmail();
});

input_senha.addEventListener('input', function() {
    validarSenha();
});

input_confirmar_senha.addEventListener('input', function() {
    validarSenha();
});
