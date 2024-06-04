var timaoClickerModel = require("../models/timaoClickerModel");

function enviarJogo(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo timaoClicker.html
    var tempoFinalHoras = req.body.tempoFinalHorasServer;
    var click = req.body.clickServer;
    var idJogador = req.body.idJogadorServer;

        // Passe os valores como parâmetro e vá para o arquivo timaoClickerModel.js
        timaoClickerModel.enviarJogo(tempoFinalHoras, click, idJogador)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o envio dos dados do jogo! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

module.exports = {
    enviarJogo
}