
USE company_db;

INSERT INTO department (name) VALUES ("Marketing");
INSERT INTO department (name) VALUES ("Sales");
INSERT INTO department (name) VALUES ("Operations");
INSERT INTO department (name) VALUES ("Services");
INSERT INTO department (name) VALUES ("Human Resources");

INSERT INTO role (title, salary, department_id) VALUES ("Sales Lead", 50, 1);
INSERT INTO role (title, salary, department_id) VALUES ("Salesperson", 40, 2);
INSERT INTO role (title, salary, department_id) VALUES ("Software Enginner", 90, 3);
INSERT INTO role (title, salary, department_id) VALUES ("HR Director", 60, 4);
INSERT INTO role (title, salary, department_id) VALUES ("Front Desk", 30, 5);

INSERT INTO employee (first_name, last_name, role_id) VALUES ("Armando", "Rodriguez", 1);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Julia", "O'Bryant", 2);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Kinzie", "Rodriguez", 3);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("John", "Snow", 4);
INSERT INTO employee (first_name, last_name, role_id) VALUES ("Carlos", "Garcia", 5);