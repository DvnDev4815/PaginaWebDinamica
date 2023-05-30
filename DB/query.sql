CREATE DATABASE IF NOT EXISTS `ProyectoFinal`;

USE `ProyectoFinal`;

CREATE TABLE `Alumnos`(
    `ID` INT UNSIGNED NOT NULL UNIQUE,
    `Nombre` TEXT NOT NULL,
    `Email` TEXT NOT NULL,
    `codCurso` INT UNSIGNED NOT NULL
);