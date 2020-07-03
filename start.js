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
          type: "input",
          message: "This is a test",
          name: "test",
        },
      ])
      .then((answers) => {
        console.log(answers.test);
      })
      .catch((err) => {
        if (err) throw err;
      });
  }