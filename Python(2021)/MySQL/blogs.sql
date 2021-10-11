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
CREATE SCHEMA IF NOT EXISTS `blogsdb` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci ;
USE `blogsdb` ;

-- -----------------------------------------------------
-- Table `mydb`.`blogs`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `blogsdb`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `password` VARCHAR(45) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));
CREATE TABLE IF NOT EXISTS `blogsdb`.`blogs` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `title` VARCHAR(45) NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`));
CREATE TABLE IF NOT EXISTS `blogsdb`.`admins` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NULL,
  `blog_id` INT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
CREATE TABLE IF NOT EXISTS `blogsdb`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `post` TEXT(255) NULL,
  `user_id` INT NULL,
  `blog_id` INT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
CREATE TABLE IF NOT EXISTS `blogsdb`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `post` TEXT(255) NULL,
  `user_id` INT NULL,
  `post_id` INT NULL,
  `created_at` DATETIME NULL,
  `updated_at` DATETIME NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
