CREATE DATABASE project910db;

USE project910db;

CREATE TABLE `users` (

  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  highscore INTEGER(10),
  location VARCHAR(300),
  latitude INTEGER(10),
  longitude INTEGER(10),
  email VARCHAR(50),
  fbid VARCHAR(30),
  createdAt DATETIME,
  updatedAt DATETIME,
  PRIMARY KEY (id)
);

CREATE TABLE `events` (

  id INTEGER NOT NULL AUTO_INCREMENT,
  event VARCHAR(30),
  date datetime,
  location VARCHAR(300),
  latitude INTEGER(10),
  longitude INTEGER(10),
  description VARCHAR(500),
  createdAt DATETIME,
  updatedAt DATETIME,  
  PRIMARY KEY (id)
);

CREATE TABLE `RecycleCenters` (

  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(30),
  material VARCHAR(100),
  location VARCHAR(300),
  latitude INTEGER(10),
  longitude INTEGER(10),
  createdAt DATETIME,
  updatedAt DATETIME,
  PRIMARY KEY (id)
);