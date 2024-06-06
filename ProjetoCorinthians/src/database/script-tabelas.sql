create database corinthiansIndividual;

use corinthiansIndividual;

create table corinthiano (
idCorinthiano int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
idoloFav int);

create table timaoClicker (
idJogo int primary key auto_increment,
tempoJogo float,
clicks int,
fkCorinthiano int,
constraint fkCorinthianoJogo foreign key (fkCorinthiano) references corinthiano(idCorinthiano));


INSERT INTO corinthiano (nome, email, senha, idoloFav) VALUES
('Victor', 'victor@gmail.com', '1910', 1),
('Arthur', 'arthur@gmail.com', '12345', 8),
('Gab', 'gab@gmail.com', '0101', 3),
('Vitoria', 'vitoria@gmail.com', '2411', 1),
('Nicolas Nunes', 'nicolas@gmail.com', '2001', 8),
('Kevin Estrela', 'estrela@gmail.com', '1234', 5),
('Sigma Redpill', 'xandaoForever@gmail.com', 'neymar', 8),
('Matheus Oliveira', 'oliveira@gmail.com', '0123', 1),
('João Kleber', 'joão@gmail.com', '12345', 7),
('Maria', 'maria@gmail.com', 'senhaMaria', 2),
('Pedro', 'pedro@gmail.com', 'senhaPedro', 4),
('Carla', 'carla@gmail.com', 'senhaCarla', 6),
('Lucas', 'lucas@gmail.com', 'senhaLucas', 9),
('Isabela', 'isabela@gmail.com', 'senhaIsabela', 10),
('Marcos', 'marcos@gmail.com', 'senhaMarcos', 11),
('Julia', 'julia@gmail.com', 'senhaJulia', 12);


INSERT INTO timaoClicker (tempoJogo, clicks, fkCorinthiano) VALUES 
('4.30', 100, 1),
('6.45', 300, 2),
('7.00', 100, 6),
('1.15', 5000, 3),
('0.07', 3000, 4);

SELECT idoloFav, COUNT(*) as quantidade FROM corinthiano
	GROUP BY idoloFav
		ORDER BY quantidade DESC
			LIMIT 1;
		
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

            
select * from timaoClicker join corinthiano 
	on fkCorinthiano = idCorinthiano
		where idCorinthiano = 1;

select AVG(clicks) from timaoClicker;

SELECT
    (SELECT tempoJogo FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1) AS tempo1,
    (SELECT corinthiano.nome FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1) AS nome1,
    (SELECT tempoJogo FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 1) AS tempo2,
    (SELECT corinthiano.nome FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 1) AS nome2,
    (SELECT tempoJogo FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 2) AS tempo3,
    (SELECT corinthiano.nome FROM timaoClicker JOIN corinthiano ON fkCorinthiano = idCorinthiano ORDER BY tempoJogo ASC LIMIT 1 OFFSET 2) AS nome3;
