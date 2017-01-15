DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'Messages'
--
-- ---

DROP TABLE IF EXISTS Messages;

CREATE TABLE Messages (
  id INTEGER NOT NULL AUTO_INCREMENT,
  id_user INTEGER NULL DEFAULT NULL,
  roomname MEDIUMTEXT NULL DEFAULT NULL,
  message MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Table 'Rooms'
--
-- ---

-- ---
-- Table 'User'
--
-- ---

DROP TABLE IF EXISTS User;

CREATE TABLE User (
  id INTEGER NOT NULL AUTO_INCREMENT,
  username MEDIUMTEXT NULL DEFAULT NULL,
  PRIMARY KEY (id)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE Messages ADD FOREIGN KEY (id_user) REFERENCES User (id);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE 'Messages' ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `User` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Messages` (`id`,`id_user`,`id_rooms`,`message`) VALUES
-- ('','','','');
-- INSERT INTO `Rooms` (`id`,`name`) VALUES
-- ('','');
-- INSERT INTO `User` (`id`) VALUES
-- ('');