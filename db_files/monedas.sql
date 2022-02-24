-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: mariadb
-- Tiempo de generación: 21-01-2021 a las 11:39:50
-- Versión del servidor: 10.4.17-MariaDB-1:10.4.17+maria~focal
-- Versión de PHP: 7.4.11
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!40101 SET NAMES utf8mb4 */
;
--
-- Base de datos: `dwec`
--
CREATE DATABASE IF NOT EXISTS `dwec` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `dwec`;
-- --------------------------------------------------------
--
-- Estructura de tabla para la tabla `monedas`
--
CREATE TABLE `monedas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `symbol` varchar(512) NOT NULL,
  `name` varchar(512) NOT NULL,
  `image_url` varchar(2048),
  `current_price_eur` decimal(12),
  CONSTRAINT id PRIMARY KEY (id)
) ENGINE = InnoDB DEFAULT CHARSET = latin1 COLLATE = latin1_spanish_ci;
--
-- Indices de la tabla `monedas`
--
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;