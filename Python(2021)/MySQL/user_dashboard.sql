-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dashboardssdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `dashboardssdb` ;

-- -----------------------------------------------------
-- Table `mydb`.`dashboardss`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `dashboardssdb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `description` TEXT(255) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));
CREATE TABLE IF NOT EXISTS `dashboardsdb`.`admins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));
CREATE TABLE IF NOT EXISTS `dashboardsdb`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `message` TEXT(255) NULL,
  `user_id` INT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));
CREATE TABLE IF NOT EXISTS `dashboardsdb`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `comment` TEXT(255) NULL,
  `user_id` INT NULL,
  `message_id` INT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
