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

INSERT INTO corinthiano VALUES
('Victor', 'victor@gmail.com', '1910', 1),
('Arthur', 'arthur@gmail.com', '12345', 8),
('Gab', 'gab@gmail.com', '0101', 3),
('Vitoria', 'vitoria@gmail.com', '2411', 1),
('Nicolas Nunes', 'nicolas@gmail.com', '2001', 8),
('Kevin Estrela', 'estrela@gmail.com', '1234', 5),
('Sigma Redpill', 'xandaoForever@gmail.com', 'neymar', 8),
('Matheus Oliveira', 'oliveira@gmail.com', '0123', 1),
('João Kleber', 'joão@gmail.com', '12345', 7);

INSERT INTO timaoClicker (tempoJogo, clicks, fkCorinthiano) VALUES 
('4.30', 100, 1),
('6.45', 300, 1),
('7.00', 100, 1),
('1.15', 5000, 1),
('0.07', 3000, 1);

SELECT idoloFav, COUNT(*) as quantidade FROM corinthiano
	GROUP BY idoloFav
		ORDER BY quantidade DESC
			LIMIT 1;

select * from timaoClicker join corinthiano 
	on fkCorinthiano = idCorinthiano
		where idCorinthiano = 1;
        
select tempoJogo, fkCorinthiano from timaoClicker join corinthiano
	on fkCorinthiano = idCorinthiano
		order by tempoJogo asc 
			limit 3;

select AVG(clicks) from timaoClicker;