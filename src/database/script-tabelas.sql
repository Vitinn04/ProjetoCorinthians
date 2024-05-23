create database corinthiansIndividual;

use corinthiansIndividual;

create table corinthiano (
idCorinthiano int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45),
idoloFav int);

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

select * from corinthiano;