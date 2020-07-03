const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Poorboi22",
  database: "employee_db",
});

connection.connect();

connection.query((err) => {
  console.log("Connected to mysql");

  startEmployee();
});



connection.end();

function startEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do?",
          name: "startEmployee",
          choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager']
        },
      ])
      .then((answers) => {
        console.log(answers.startEmployee);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }