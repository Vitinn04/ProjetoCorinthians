var database = require("../database/config")

function maisEscolhido() {
    var instrucaoSql = `
    SELECT idoloFav as jogadorFavorito, COUNT(*) as quantidade FROM corinthiano
	GROUP BY jogadorFavorito
		ORDER BY quantidade DESC
			LIMIT 1;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function mediaClick() {
    var instrucaoSql = `
    SELECT ROUND(AVG(clicks), 0) as media FROM timaoClicker;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function ranking() {
    var instrucaoSql = `
    select tempoJogo as tempo, corinthiano.nome as nome from timaoClicker join corinthiano
	on fkCorinthiano = idCorinthiano
		order by tempo asc 
			limit 3;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    maisEscolhido,
    mediaClick,
    ranking
};

