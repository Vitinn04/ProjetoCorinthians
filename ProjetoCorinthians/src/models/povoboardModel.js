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
    SELECT
    (SELECT tempoJogo FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1) AS tempo1,
    (SELECT corinthiano.nome FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1) AS nome1,
    (SELECT tempoJogo FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 1) AS tempo2,
    (SELECT corinthiano.nome FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 1) AS nome2,
    (SELECT tempoJogo FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 2) AS tempo3,
    (SELECT corinthiano.nome FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 2) AS nome3;
`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function grafico() {
    var instrucaoSql = `
    SELECT 
    CASE idoloFav
		WHEN 1 THEN 'Cassio'
        WHEN 2 THEN 'Rivelino'
        WHEN 3 THEN 'Socrates'
        WHEN 4 THEN 'Zanotti'
        WHEN 5 THEN 'Tamires'
        WHEN 6 THEN 'Leticia'
        WHEN 7 THEN 'Fagner'
        WHEN 8 THEN 'Emerson'
        WHEN 9 THEN 'ZeMaria'
        WHEN 10 THEN 'Grazi'
        WHEN 11 THEN 'Portilho'
        WHEN 12 THEN 'Tarciane'
    END as nomeIdolo,
    COUNT(*) as quantidade 
FROM corinthiano
GROUP BY idoloFav
ORDER BY quantidade DESC;
   `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    maisEscolhido,
    mediaClick,
    ranking,
    grafico
};

