-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 02, 2023 at 10:04 AM
-- Server version: 10.4.25-MariaDB
-- PHP Version: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ctk_dokument`
--

-- --------------------------------------------------------

--
-- Table structure for table `dokument_transactions`
--

CREATE TABLE `dokument_transactions` (
  `id_transaction` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_pesan` varchar(255) DEFAULT NULL,
  `file_dokument` varchar(255) DEFAULT NULL,
  `url_dokument` varchar(255) DEFAULT NULL,
  `halaman_dokument` varchar(255) DEFAULT NULL,
  `status_transaction` varchar(255) DEFAULT NULL,
  `Jenis_pembayaran` varchar(255) DEFAULT NULL,
  `harga` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `dokument_transactions`
--

INSERT INTO `dokument_transactions` (`id_transaction`, `id_pesan`, `file_dokument`, `url_dokument`, `halaman_dokument`, `status_transaction`, `Jenis_pembayaran`, `harga`, `createdAt`, `updatedAt`) VALUES
('cbae1551-9cff-4948-900a-390f367820d6', 'f0692dea-0aa1-4d9f-a886-dd6f9dc5c3e0', 'file_dokument-1675318413403-15724428', 'http://localhost:8000/file/dokument/file_dokument-1675318413403-15724428', '123', 'Belum Dilunasi', 'COD', '123', '2023-02-02 06:13:33', '2023-02-02 06:13:33');

-- --------------------------------------------------------

--
-- Table structure for table `order_types`
--

CREATE TABLE `order_types` (
  `id_order` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `order_type` varchar(255) DEFAULT NULL,
  `document_type` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `order_types`
--

INSERT INTO `order_types` (`id_order`, `order_type`, `document_type`, `createdAt`, `updatedAt`) VALUES
('3c25b164-afe9-455c-95b1-0e9790d68556', 'Cetak Dokument', 'PDF', '2022-12-06 08:11:43', '2022-12-06 08:14:21'),
('696c0db3-b9f8-4746-96a6-8070aa215103', 'Cetak Dokument', 'DOCS', '2022-12-06 07:06:19', '2022-12-06 07:06:19'),
('fa7eb293-8edd-4e31-9518-b640e929dd18', 'Cetak Dokument', 'EXCEL', '2022-12-06 08:12:20', '2022-12-06 08:12:20');

-- --------------------------------------------------------

--
-- Table structure for table `pesan_transactions`
--

CREATE TABLE `pesan_transactions` (
  `id_pesan` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_order` varchar(255) DEFAULT NULL,
  `id_users` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `pesan_transactions`
--

INSERT INTO `pesan_transactions` (`id_pesan`, `id_order`, `id_users`, `createdAt`, `updatedAt`) VALUES
('f0692dea-0aa1-4d9f-a886-dd6f9dc5c3e0', '3c25b164-afe9-455c-95b1-0e9790d68556', '0fe1b584-acf8-4d8e-846d-a7b39b749857', '2023-01-16 01:57:35', '2023-01-16 02:27:31');

-- --------------------------------------------------------

--
-- Table structure for table `print_types`
--

CREATE TABLE `print_types` (
  `id_cetak` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_order` varchar(255) DEFAULT NULL,
  `type_cetak` varchar(255) DEFAULT NULL,
  `sheet` varchar(255) DEFAULT NULL,
  `price` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `print_types`
--

INSERT INTO `print_types` (`id_cetak`, `id_order`, `type_cetak`, `sheet`, `price`, `createdAt`, `updatedAt`) VALUES
('6c6ca30e-3011-4707-a45d-53476d5705d2', '3c25b164-afe9-455c-95b1-0e9790d68556', 'Berwarna', '1', '2000', '2022-12-07 01:30:06', '2022-12-07 01:30:06');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id_roles` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_users` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id_roles`, `id_users`, `roles`, `createdAt`, `updatedAt`) VALUES
('e9eefa5a-721f-4a1f-8520-a26876a8b267', '0fe1b584-acf8-4d8e-846d-a7b39b749857', 'Admin', '2022-12-06 07:04:14', '2022-12-06 07:04:14');

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id_token` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `id_users` varchar(255) DEFAULT NULL,
  `accsesToken` varchar(255) DEFAULT NULL,
  `refreshToken` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tokens`
--

INSERT INTO `tokens` (`id_token`, `id_users`, `accsesToken`, `refreshToken`, `createdAt`, `updatedAt`) VALUES
('519d89ca-cb67-458c-89cf-cb164b6aa55b', '0fe1b584-acf8-4d8e-846d-a7b39b749857', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBmZTFiNTg0LWFjZjgtNGQ4ZS04NDZkLWE3YjM5Yjc0OTg1NyIsImlhdCI6MTY3NTMxODM5OCwiZXhwIjoxNjc1MzIxOTk4fQ.Vcv9bAJNPhzb_xMQFpCthQwnDoiOwou2TjhlzU4953k', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjBmZTFiNTg0LWFjZjgtNGQ4ZS04NDZkLWE3YjM5Yjc0OTg1NyIsImlhdCI6MTY3NTMxODM5OCwiZXhwIjoxNjc1MzIxOTk4fQ.shGeJF_Jjejp-ovlOO7BwOlRkRo2DkldTxGcEdutL68', '2022-12-06 07:04:36', '2023-02-02 06:13:18');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_users` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_users`, `username`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
('0fe1b584-acf8-4d8e-846d-a7b39b749857', 'setyo', 'setyo@gmail.com', '$argon2id$v=19$m=65536,t=3,p=4$bNhlAAykzecnE8EP6HDyqA$9hUKhM9VC+zggVHsU+w6ixsSFr9CUmL9vcdkCoc2aS8', '2022-12-06 07:04:14', '2022-12-06 07:04:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dokument_transactions`
--
ALTER TABLE `dokument_transactions`
  ADD PRIMARY KEY (`id_transaction`);

--
-- Indexes for table `order_types`
--
ALTER TABLE `order_types`
  ADD PRIMARY KEY (`id_order`);

--
-- Indexes for table `pesan_transactions`
--
ALTER TABLE `pesan_transactions`
  ADD PRIMARY KEY (`id_pesan`);

--
-- Indexes for table `print_types`
--
ALTER TABLE `print_types`
  ADD PRIMARY KEY (`id_cetak`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id_roles`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id_token`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_users`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
