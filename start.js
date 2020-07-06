const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");


var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Poorboi22",
  database: "company_db",
});

connection.connect();

connection.query((err) => {
  console.log("Connected to mysql");

  startEmployee();

 
});





function startEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do?",
          name: "startEmployee",
          choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Remove Employee', 'Update Employee Role', 'Update Employee Manager', 'Exit']
        },
      ])
      .then((answers) => {
        console.log(answers.startEmployee);

        switch (answers.startEmployee) {
          case "View All Employees":
            console.log("View All Employees PH")
            break;
          case "View All Employees By Department":
            console.log("View all employees by department")
            break;
          case "View All Employees By Manager":
            console.log("View all employees by manager")
            break;
          case "Add Employee":
            addEmployee();
            break;
          case "Remove Employee":
            console.log("remove employee")
            break;
          case "Update Employee Role":
            console.log("Update employee role")
            break;
          case "Update Employee Manager":
            console.log("Update Employee Manager")
            break;
          case "Exit":
            connection.end();
            break;
        }
        
       
      })
      .catch((err) => {
        if (err) throw err;
      });
  }


  // ADD EMPLOYEE FUNCTION //
  function addEmployee() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "First Name...",
          name: "empFirstName",
        },
        {
          type: "input",
          message: "Last Name...",
          name: "empLastName",
        },
        {
          type: "list",
          message: "Role...",
          name: "empRole",
          choices: [
            "Sales Lead",
            "Sales Person",
            "Lead Engineer",
            "Accountant",
            "Legal Team Leaed",
            "Lawyer"
          ]
        },
      ])
      .then((answers) => {
        let value = {first_name: answers.empFirstName, last_name: answers.empLastName}
        let sql = 'INSERT INTO employee SET ?'
        connection.query(sql, value, (err, result) => {
          if (err) throw err;
          console.log(result)
          startEmployee();
        })
      })
      .catch((err) => {
        if (err) throw err;
      });

  }


