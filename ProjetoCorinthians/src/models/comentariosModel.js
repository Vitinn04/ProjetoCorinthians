var database = require("../database/config");

function listar() {
    console.log("ACESSEI O AVISO  MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucaoSql = `
        SELECT 
            c.idComentario,
            c.titulo,
            c.descricao,
            c.fkCorinthiano,
            u.idCorinthiano,
            u.nome,
            u.email,
            u.senha
        FROM comentarios AS c
            INNER JOIN Corinthiano AS u
                ON c.fkCorinthiano = u.idCorinthiano;
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function pesquisarDescricao(texto) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function pesquisarDescricao()");
    var instrucaoSql = `
        SELECT 
            c.idComentario,
            c.titulo,
            c.descricao,
            c.fkCorinthiano,
            u.idCorinthiano,
            u.nome,
            u.email,
            u.senha
        FROM comentarios AS c
            INNER JOIN Corinthiano AS u
                ON c.fkCorinthiano = u.idCorinthiano
        WHERE c.descricao LIKE '${texto}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listarPorCorinthiano(idCorinthiano) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listarPorCorinthiano()");
    var instrucaoSql = `
        SELECT 
            c.idComentario,
            c.titulo,
            c.descricao,
            c.fkCorinthiano,
            u.idCorinthiano,
            u.nome,
            u.email,
            u.senha
        FROM comentarios AS c
            INNER JOIN Corinthiano AS u
                ON c.fkCorinthiano = u.idCorinthiano
        WHERE u.idCorinthiano = ${idCorinthiano};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function publicar(titulo, descricao, idCorinthiano) {
    console.log("ACESSEI O AVISO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function publicar(): ", titulo, descricao, idCorinthiano);
    var instrucaoSql = `
        INSERT INTO comentarios (titulo, descricao, fkCorinthiano) VALUES ('${titulo}', '${descricao}', ${idCorinthiano});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function deletar(idComentario) {
    console.log("ACESSEI O COMENTARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function deletar():", idComentario);
    var instrucaoSql = `
        DELETE FROM comentarios WHERE idComentario = ${idComentario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    listar,
    listarPorCorinthiano,
    pesquisarDescricao,
    publicar,
    deletar
}