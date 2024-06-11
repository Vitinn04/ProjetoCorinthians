-- Creating the database
CREATE DATABASE corinthiansIndividual;

-- Using the database
USE corinthiansIndividual;

-- Creating the corinthiano table
CREATE TABLE corinthiano (
    idCorinthiano INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(45),
    senha VARCHAR(45),
    idoloFav INT
);

-- Creating the timaoClicker table
CREATE TABLE timaoClicker (
    idJogo INT PRIMARY KEY AUTO_INCREMENT,
    tempoJogo FLOAT,
    clicks INT,
    fkCorinthiano INT,
    CONSTRAINT fkCorinthianoJogo FOREIGN KEY (fkCorinthiano) REFERENCES corinthiano(idCorinthiano)
);

-- Creating the historico table
CREATE TABLE historico (
    idCorinthiano INT,
    idJogo INT,
    quantosJogos INT,
    PRIMARY KEY(idCorinthiano, idJogo),
    CONSTRAINT fkCorinthianoHistorico FOREIGN KEY (idCorinthiano) REFERENCES corinthiano(idCorinthiano),
    CONSTRAINT fkTimaoClickerHistorico FOREIGN KEY (idJogo) REFERENCES timaoClicker(idJogo)
);

-- Creating the comentarios table
CREATE TABLE comentarios (
    idComentario INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(500),
    momentoComent DATETIME,
    fkCorinthiano INT,
    CONSTRAINT fkCorinthianoComentario FOREIGN KEY (fkCorinthiano) REFERENCES corinthiano(idCorinthiano)
);

-- Inserting data into the corinthiano table
INSERT INTO corinthiano (nome, email, senha, idoloFav) VALUES
('Victor', 'victor@gmail.com', 'senha1910', 1),
('Arthur', 'arthur@gmail.com', 'senha12345', 8),
('Gab', 'gab@gmail.com', 'senha0101', 3),
('Vitoria', 'vitoria@gmail.com', 'senha2411', 1),
('Nicolas Nunes', 'nicolas@gmail.com', 'senha2001', 8),
('Kevin Estrela', 'estrela@gmail.com', 'senha1234', 5),
('Sigma Redpill', 'xandaoForever@gmail.com', 'senhaneymar', 8),
('Matheus Oliveira', 'oliveira@gmail.com', 'senha0123', 1),
('João Kleber', 'joão@gmail.com', 'senha12345', 7),
('Maria', 'maria@gmail.com', 'senhaMaria', 2),
('Pedro', 'pedro@gmail.com', 'senhaPedro', 4),
('Carla', 'carla@gmail.com', 'senhaCarla', 6),
('Lucas', 'lucas@gmail.com', 'senhaLucas', 9),
('Isabela', 'isabela@gmail.com', 'senhaIsabela', 10),
('Marcos', 'marcos@gmail.com', 'senhaMarcos', 11),
('Julia', 'julia@gmail.com', 'senhaJulia', 12),
('Bruno', 'bruno@gmail.com', 'senhaBruno', 1),
('Fernanda', 'fernanda@gmail.com', 'senhaFernanda', 2),
('Ricardo', 'ricardo@gmail.com', 'senhaRicardo', 3),
('Larissa', 'larissa@gmail.com', 'senhaLarissa', 4),
('Felipe', 'felipe@gmail.com', 'senhaFelipe', 5),
('Tatiana', 'tatiana@gmail.com', 'senhaTatiana', 6),
('Guilherme', 'guilherme@gmail.com', 'senhaGuilherme', 7),
('Patricia', 'patricia@gmail.com', 'senhaPatricia', 8),
('Leonardo', 'leonardo@gmail.com', 'senhaLeonardo', 9),
('Gabriela', 'gabriela@gmail.com', 'senhaGabriela', 10),
('Andre', 'andre@gmail.com', 'senhaAndre', 11),
('Aline', 'aline@gmail.com', 'senhaAline', 12),
('Thiago', 'thiago@gmail.com', 'senhaThiago', 1),
('Beatriz', 'beatriz@gmail.com', 'senhaBeatriz', 2),
('Rodrigo', 'rodrigo@gmail.com', 'senhaRodrigo', 3),
('Camila', 'camila@gmail.com', 'senhaCamila', 4),
('Rafael', 'rafael@gmail.com', 'senhaRafael', 5),
('Ana', 'ana@gmail.com', 'senhaAna', 6),
('Renato', 'renato@gmail.com', 'senhaRenato', 7),
('Juliana', 'juliana@gmail.com', 'senhaJuliana', 8),
('Marcelo', 'marcelo@gmail.com', 'senhaMarcelo', 9),
('Caroline', 'caroline@gmail.com', 'senhaCaroline', 10),
('Sergio', 'sergio@gmail.com', 'senhaSergio', 11),
('Cintia', 'cintia@gmail.com', 'senhaCintia', 12),
('Alexandre', 'alexandre@gmail.com', 'senhaAlexandre', 1),
('Vanessa', 'vanessa@gmail.com', 'senhaVanessa', 2),
('Bruno S.', 'brunos@gmail.com', 'senhaBrunoS', 3),
('Renata', 'renata@gmail.com', 'senhaRenata', 4),
('Vinicius', 'vinicius@gmail.com', 'senhaVinicius', 5),
('Bianca', 'bianca@gmail.com', 'senhaBianca', 6),
('Edson', 'edson@gmail.com', 'senhaEdson', 7),
('Paula', 'paula@gmail.com', 'senhaPaula', 8),
('Diego', 'diego@gmail.com', 'senhaDiego', 9),
('Monica', 'monica@gmail.com', 'senhaMonica', 10),
('Douglas', 'douglas@gmail.com', 'senhaDouglas', 11),
('Angela', 'angela@gmail.com', 'senhaAngela', 12),
('Alessandro', 'alessandro@gmail.com', 'senhaAlessandro', 1),
('Cristiane', 'cristiane@gmail.com', 'senhaCristiane', 2),
('Mauricio', 'mauricio@gmail.com', 'senhaMauricio', 3),
('Debora', 'debora@gmail.com', 'senhaDebora', 4),
('Fábio', 'fabio@gmail.com', 'senhaFabio', 5),
('Simone', 'simone@gmail.com', 'senhaSimone', 6),
('Igor', 'igor@gmail.com', 'senhaIgor', 7),
('Elaine', 'elaine@gmail.com', 'senhaElaine', 8),
('Sandro', 'sandro@gmail.com', 'senhaSandro', 9),
('Raquel', 'raquel@gmail.com', 'senhaRaquel', 10),
('Cristiano', 'cristiano@gmail.com', 'senhaCristiano', 11),
('Francisca', 'francisca@gmail.com', 'senhaFrancisca', 12),
('Wesley', 'wesley@gmail.com', 'senhaWesley', 1),
('Kelly', 'kelly@gmail.com', 'senhaKelly', 2),
('Daniel', 'daniel@gmail.com', 'senhaDaniel', 3),
('Viviane', 'viviane@gmail.com', 'senhaViviane', 4),
('Antonio', 'antonio@gmail.com', 'senhaAntonio', 5),
('Vanusa', 'vanusa@gmail.com', 'senhaVanusa', 6),
('Cristian', 'cristian@gmail.com', 'senhaCristian', 7),
('Carina', 'carina@gmail.com', 'senhaCarina', 8),
('Henrique', 'henrique@gmail.com', 'senhaHenrique', 9),
('Elaisa', 'elaisa@gmail.com', 'senhaElaisa', 10),
('Jorge', 'jorge@gmail.com', 'senhaJorge', 11),
('Natalia', 'natalia@gmail.com', 'senhaNatalia', 12),
('Alan', 'alan@gmail.com', 'senhaAlan', 1),
('Diana', 'diana@gmail.com', 'senhaDiana', 2),
('Edgar', 'edgar@gmail.com', 'senhaEdgar', 3),
('Ingrid', 'ingrid@gmail.com', 'senhaIngrid', 4),
('Eduardo', 'eduardo@gmail.com', 'senhaEduardo', 5),
('Silvana', 'silvana@gmail.com', 'senhaSilvana', 6),
('Jeferson', 'jeferson@gmail.com', 'senhaJeferson', 7),
('Luciana', 'luciana@gmail.com', 'senhaLuciana', 8),
('Rodrigo Silva', 'rodrigosilva@gmail.com', 'senhaRodrigoS', 9),
('Carmen', 'carmen@gmail.com', 'senhaCarmen', 10),
('Flavio', 'flavio@gmail.com', 'senhaFlavio', 11),
('Janaína', 'janaina@gmail.com', 'senhaJanaina', 12);

-- Inserting data into the timaoClicker table
INSERT INTO timaoClicker (tempoJogo, clicks, fkCorinthiano) VALUES 
(4.30, 100, 1),
(6.45, 300, 2),
(3.00, 100, 6),
(2.15, 5000, 3),
(2.57, 3000, 4);

INSERT INTO timaoClicker (tempoJogo, clicks, fkCorinthiano) VALUES 
(4.30, 1000, 2),
(6.45, 3000, 6),
(3.00, 1000, 9),
(2.15, 7000, 10),
(2.57, 6000, 3);

-- Inserting data into the comentarios table
INSERT INTO comentarios (titulo, descricao, momentoComent, fkCorinthiano) VALUES
('Campeões do Mundo!', 'Que emoção! Corinthians campeão mundial novamente, uma vitória histórica contra o Chelsea!', '2012-12-16 14:30:00', 1),
('Cássio gigante!', 'Cássio foi um monstro no gol, salvou o time várias vezes. Melhor em campo!', '2012-12-16 15:00:00', 2),
('Gol do Guerrero!', 'Guerrero fez o gol do título! Um herói inesquecível para a nação corintiana.', '2012-12-16 15:30:00', 3),
('Timão no topo do mundo', 'O Corinthians mostrou ao mundo a sua força. Orgulho de ser corintiano!', '2012-12-16 16:00:00', 4),
('Torcida espetacular', 'A torcida deu um show à parte no Japão. Parabéns à fiel torcida!', '2012-12-16 16:30:00', 5),
('Inesquecível', 'Esse título vai ficar marcado para sempre na memória de todos os corintianos.', '2012-12-16 17:00:00', 6),
('Vitória da raça', 'Foi uma vitória da raça e da determinação. Corinthians, sempre lutando até o fim.', '2012-12-16 17:30:00', 7),
('Chelsea não teve chance', 'O Chelsea não conseguiu jogar, fomos superiores em campo.', '2012-12-16 18:00:00', 8),
('Tática perfeita', 'Tite montou um esquema tático perfeito. Mérito total do nosso treinador.', '2012-12-16 18:30:00', 9),
('Corinthians eterno', 'Esse título é a prova de que o Corinthians é eterno e sempre será gigante.', '2012-12-16 19:00:00', 10);

-- Another batch of comments related to the same event
INSERT INTO comentarios (titulo, descricao, momentoComent, fkCorinthiano) VALUES
('Que jogo!', 'Foi um jogo emocionante, disputado até o último minuto. Campeões!', '2012-12-16 19:30:00', 11),
('Vamos, Corinthians!', 'A emoção de ver o Corinthians campeão mundial é indescritível. Parabéns, Timão!', '2012-12-16 20:00:00', 12),
('Guerrero herói', 'Guerrero é o herói do dia. Um gol para a história!', '2012-12-16 20:30:00', 13),
('Mérito do time todo', 'Cada jogador teve sua importância. Uma vitória de todo o elenco.', '2012-12-16 21:00:00', 14),
('Jogamos com coração', 'O time jogou com o coração, mostrando a força do Corinthians.', '2012-12-16 21:30:00', 15),
('Incrível!', 'Ainda não acredito! O Corinthians é campeão do mundo!', '2012-12-16 22:00:00', 16),
('Momento mágico', 'Foi um momento mágico. Obrigado, Corinthians, por essa alegria!', '2012-12-16 22:30:00', 17),
('Vamos comemorar', 'Hoje é dia de comemorar. O Corinthians fez história!', '2012-12-16 23:00:00', 18),
('Torcida emocionada', 'Ver a torcida emocionada é lindo demais. Obrigado, Timão!', '2012-12-16 23:30:00', 19),
('Dia histórico', 'Esse dia vai ficar para sempre na memória de todos os corintianos.', '2012-12-16 23:59:00', 20);

-- Selecting the most common idoloFav
SELECT idoloFav, COUNT(*) as quantidade FROM corinthiano
GROUP BY idoloFav
ORDER BY quantidade DESC
LIMIT 1;

-- Selecting the idol names and their counts
SELECT 
    CASE idoloFav
        WHEN 1 THEN 'cassio'
        WHEN 2 THEN 'rivelino'
        WHEN 3 THEN 'socrates'
        WHEN 4 THEN 'zanotti'
        WHEN 5 THEN 'tamires'
        WHEN 6 THEN 'leticia'
        WHEN 7 THEN 'fagner'
        WHEN 8 THEN 'emerson'
        WHEN 9 THEN 'zeMaria'
        WHEN 10 THEN 'grazi'
        WHEN 11 THEN 'portilho'
        WHEN 12 THEN 'tarciane'
    END as nomeIdolo,
    COUNT(*) as quantidade 
FROM corinthiano
GROUP BY idoloFav
ORDER BY quantidade DESC;

-- Selecting all games for a specific corinthiano
SELECT * FROM timaoClicker 
JOIN corinthiano ON fkCorinthiano = idCorinthiano
WHERE idCorinthiano = 1;

-- Calculating the average clicks
SELECT AVG(clicks) FROM timaoClicker;

-- Selecting the top 3 shortest game times and corresponding corinthiano names
SELECT
    (SELECT tempoJogo FROM timaoClicker ORDER BY tempoJogo ASC LIMIT 1) AS tempo1,
    (SELECT corinthiano.nome FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1) AS nome1,
    (SELECT tempoJogo FROM timaoClicker ORDER BY tempoJogo ASC LIMIT 1 OFFSET 1) AS tempo2,
    (SELECT corinthiano.nome FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 1) AS nome2,
    (SELECT tempoJogo FROM timaoClicker ORDER BY tempoJogo ASC LIMIT 1 OFFSET 2) AS tempo3,
    (SELECT corinthiano.nome FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 2) AS nome3;
