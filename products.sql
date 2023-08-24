-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Aug 24, 2023 at 08:11 PM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `inventory_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(355) DEFAULT NULL,
  `unit` varchar(355) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `expiry` date DEFAULT NULL,
  `inventory` int(11) DEFAULT NULL,
  `image_path` longtext,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `unit`, `price`, `expiry`, `inventory`, `image_path`, `created_at`, `updated_at`) VALUES
(51, 'Egg', 'Per Tray', '150.00', '2023-08-27', 300, 'uploads/egg-4_c3b25744-821f-4ae4-93ea-ad0222114952.webp', '2023-08-25 02:22:44', '2023-08-25 03:39:35'),
(52, 'Coke Can', 'Per Piece', '20.00', '2024-03-12', 100, 'uploads/download.jpeg', '2023-08-25 02:25:03', '2023-08-25 04:02:23'),
(53, 'Apples', 'Per Piece', '10.00', '2023-08-26', 200, 'uploads/apple.jpeg', '2023-08-25 02:26:19', '2023-08-25 03:49:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
