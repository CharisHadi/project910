CREATE DATABASE SavePlanetDB;

USE SavePlanetDB;

CREATE TABLE `users` (

  id INT NOT NULL AUTO_INCREMENT,
  name varchar(30),
  highscore int(10),
  location varchar(300),
  lattitude int(10),
  longitude int(10),
  PRIMARY KEY (id)
);

CREATE TABLE `events` (

  id INT NOT NULL AUTO_INCREMENT,
  event varchar(30),
  date datetime,
  location varchar(300),
  lattitude int(10),
  longitude int(10),
  description varchar(500),
  
  PRIMARY KEY (id)
);

CREATE TABLE `RecycleCenters` (

  id INT NOT NULL AUTO_INCREMENT,
  name varchar(30),
  material varchar(100),
  location varchar(300),
  lattitude int(10),
  longitude int(10),
  PRIMARY KEY (id)
);