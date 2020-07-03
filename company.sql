CREATE DATABASE company;

USE company;

CREATE TABLE employee_db (
id INT AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager INT NOT NULL,
PRIMARY KEY(id)
);


CREATE TABLE role_db (
id INT AUTO_INCREMENT NOT NULL,
title VARCHAR(30),
salary DECIMAL,
department_id INT,
PRIMARY KEY(id)
)