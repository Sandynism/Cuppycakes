CREATE DATABASE `cupcake_db`;
USE `cupcake_db`;

CREATE TABLE `cupcakes` (
    `id` int AUTO_INCREMENT NOT NULL,
	`name` VARCHAR(255) NOT NULL,
	`devoured` BOOLEAN DEFAULT false,
	PRIMARY KEY ( `id` )
)
