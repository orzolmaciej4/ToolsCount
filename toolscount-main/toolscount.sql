-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-05-2023 a las 18:47:57
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `toolscount`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tools`
--

CREATE TABLE `tools` (
  `name` varchar(255) NOT NULL,
  `counter` int(11) NOT NULL,
  `id_mechanic` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tools`
--

INSERT INTO `tools` (`name`, `counter`, `id_mechanic`) VALUES
('chain', 1, 'Francisco'),
('gloves', 2, 'Francisco'),
('hammer', 1, 'Francisco'),
('Hemlet', 4, 'Maritere'),
('Hot glue gun', 1, 'Maritere'),
('Ruler', 1, 'Francisco'),
('Screw', 12, 'Maritere');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `ID` int(11) NOT NULL,
  `user` varchar(255) NOT NULL,
  `pass` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`ID`, `user`, `pass`, `role`) VALUES
(2, 'Francisco', '$2a$08$0RdqDXb7DQGGw5Q3QJReIe9L4bqo8mv3POXd8XQm5ZYj2YFMp91jG', 'mechanic'),
(3, 'Javier', '$2a$08$xoqn0AEC3ztfXIG66FbdjOAfO4MVLguScvyJWXxszJJzqxxhDsYGO', 'admin'),
(5, 'Maritere', '$2a$08$dW2zSUiJzr8uqIm4V4YszemTxTe2n1AcrtL/dXTnACx3Y89TMFkl.', 'mechanic'),
(8, 'Maciej', '$2a$08$A6UmAzJXF6Kixt1x.Jjv8OLqryY4tu4ho5Nm06a2kcJ7Qq79rVa/m', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tools`
--
ALTER TABLE `tools`
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
