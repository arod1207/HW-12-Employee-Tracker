DROP DATABASE IF EXISTS company;

CREATE DATABASE company;

USE company;

CREATE TABLE employee_db (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT,
PRIMARY KEY(id)
);


CREATE TABLE role_db (
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL,
PRIMARY KEY(id)
);

CREATE TABLE department_db (
id INT AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY(id)
);

SELECT * 
FROM employee_db
INNER JOIN role_db
ON employee_db.role_id = role_db.department_id;

SELECT column5
FROM employee_db
LEFT JOIN role_db
ON employee_db.manager_id = role_db.department_id;