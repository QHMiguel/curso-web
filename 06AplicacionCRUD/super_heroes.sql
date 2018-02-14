CREATE DATABASE super_heroes;

USE super_heroes;

/* Tabla de Datos */
CREATE TABLE heroes(
	id_heroe INT NOT NULL AUTO_INCREMENT,
	nombre VARCHAR(20) NOT NULL,
	imagen VARCHAR(100) NOT NULL,
	descripcion TEXT NULL,
	editorial INT NOT NULL,
	PRIMARY KEY(id_heroe)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

/*Tabla Catálogo*/
CREATE TABLE editorial(
	id_editorial INT NOT NULL AUTO_INCREMENT,
	editorial VARCHAR(15) NOT NULL,
	PRIMARY KEY(id_editorial)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

CREATE TABLE usuarios(
	user VARCHAR(20) NOT NULL UNIQUE,
	pass VARCHAR(20) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	rol CHAR(1) NOT NULL,
	PRIMARY KEY(user)
)ENGINE=MyISAM DEFAULT CHARSET=utf8;

INSERT INTO usuarios (user,pass,email,rol) VALUES
	('jonmircha','qwerty','jonmircha@gmail.com','A'),
	('patito','quacquac','cursos@bextlan.com','U');

INSERT INTO editorial (id_editorial,editorial) VALUES 
	(1,"DC Comics"),
	(2,"Marvel Comics"),
	(3,"Shonen Jump"),
	(4,"Vértigo"),
	(5,"Mirage Studio"),
	(6,"Icon Comics");