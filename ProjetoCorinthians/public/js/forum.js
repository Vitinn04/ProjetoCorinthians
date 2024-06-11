window.addEventListener('load', function () {
    atualizarFeed();
});

function limparFormulario() {
    document.getElementById("form_postagem").reset();
}

function publicar() {
    var idUsuario = sessionStorage.ID_USUARIO;

    var corpo = {
        titulo: form_postagem.titulo.value,
        descricao: form_postagem.descricao.value
    }

    fetch(`/comentarios/publicar/${idUsuario}`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(corpo)
    }).then(function (resposta) {

        console.log("resposta: ", resposta);

        if (resposta.ok) {
            window.alert("Post realizado com sucesso pelo usuario de ID: " + idUsuario + "!");
            atualizarFeed();
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;

}

function checarUsuario() {

}

function atualizarFeed() {
    fetch("/comentarios/listar").then(function (resposta) {
        if (resposta.ok) {
            if (resposta.status == 204) {
                var feed = document.getElementById("feed_container");
                var mensagem = document.createElement("span");
                mensagem.innerHTML = "Nenhum resultado encontrado."
                feed.appendChild(mensagem);
                throw "Nenhum resultado encontrado!!";
            }

            resposta.json().then(function (resposta) {

                var feed = document.getElementById("feed_container");
                feed.innerHTML = "";

                for (let i = 0; i < resposta.length; i++) {
                    var publicacao = resposta[i];

                    // criando e manipulando elementos do HTML via JavaScript
                    var divPublicacao = document.createElement("div");
                    var spanTitulo = document.createElement("span");
                    var spanNome = document.createElement("span");
                    var divDescricao = document.createElement("div");

                    if (publicacao.idUsuario == sessionStorage.ID_USUARIO) {
                        var divButtons = document.createElement("div");
                        var btnDeletar = document.createElement("button");
                    }

                    spanTitulo.innerHTML = "Assunto: <b>" + publicacao.titulo + "</b>";
                    spanNome.innerHTML = "Corinthiano: <b>" + publicacao.nome + "</b>";
                    divDescricao.innerHTML = "Coringamento: <b>" + publicacao.descricao + "</b>";

                    if (publicacao.idUsuario == sessionStorage.ID_USUARIO) {
                        btnDeletar.innerHTML = "Deletar";
                    }

                    divPublicacao.className = "publicacao";
                    spanTitulo.id = "inputNumero" + publicacao.idAviso;
                    spanNome.className = "publicacao-nome";
                    spanTitulo.className = "publicacao-titulo";
                    divDescricao.className = "publicacao-descricao";


                    if (publicacao.idUsuario == sessionStorage.ID_USUARIO) {

                        divButtons.className = "div-buttons"
                        btnDeletar.className = "publicacao-btn-editar"
                        btnDeletar.idComentario = "btnDeletar" + publicacao.idComentario;
                        btnDeletar.setAttribute("onclick", `deletar(${publicacao.idComentario})`);
                    }

                    divPublicacao.appendChild(spanNome);
                    divPublicacao.appendChild(spanTitulo);
                    divPublicacao.appendChild(divDescricao);
                    feed.appendChild(divPublicacao);

                    if (publicacao.idUsuario == sessionStorage.ID_USUARIO) {
                        divButtons.appendChild(btnDeletar);
                        divPublicacao.appendChild(divButtons);
                    }
                }

            });
        } else {
            throw ('Houve um erro na API!');
        }
    }).catch(function (resposta) {
        console.error(resposta);
    });
}

function deletar(idComentario) {
    console.log("Criar função de apagar post escolhido - ID" + idComentario);
    fetch(`/comentarios/deletar/${idComentario}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (resposta) {

        if (resposta.ok) {
            window.alert("Post deletado com sucesso pelo usuario de email: " + sessionStorage.getItem("EMAIL_USUARIO") + "!");
            window.location = "../forum.html"
        } else if (resposta.status == 404) {
            window.alert("Deu 404!");
        } else {
            throw ("Houve um erro ao tentar realizar a postagem! Código da resposta: " + resposta.status);
        }
    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });
}