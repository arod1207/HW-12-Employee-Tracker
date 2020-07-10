const mysql = require("mysql");
const inquirer = require("inquirer");
// const cTable = require("console.table");

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

// START THE EMPLOYEE FUNCTION //
function startEmployee() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "startEmployee",
        choices: [
          "View All Employees",
          "View All Employees By Department",
          "View All Employees By Manager",
          "Add Employee",
          "Remove Employee",
          "Update Employee Role",
          "Update Employee Manager",
          "Exit",
        ],
      },
    ])
    .then((answers) => {
      switch (answers.startEmployee) {
        case "View All Employees":
          viewEmployees();
          break;
        case "View All Employees By Department":
          viewByDepartment();
          console.log("View all employees by department");
          break;
        case "View All Employees By Manager":
          console.log("View all employees by manager");
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Remove Employee":
          removeEmployee();
          break;
        case "Update Employee Role":
          console.log("Update employee role");
          break;
        case "Update Employee Manager":
          console.log("Update Employee Manager");
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
        message: "What is the employee's role?",
        name: "empRole",
        choices: [
          "Sales Lead",
          "Salesperson",
          "Software Enginner",
          "HR Director",
          "Front Desk"
        ]
      },
    ])
    .then((answers) => {
      let role_id = 6
      let roleSql = `INSERT INTO role (title) VALUES ("${answers.empRole}")`;
      connection.query(roleSql, (err, result) => {
        if (err) throw err;
        console.log(result)
      })
      let value = {
        first_name: answers.empFirstName,
        last_name: answers.empLastName,
        role_id: role_id++
      };
      let sql = "INSERT INTO employee SET ?";
      connection.query(sql, value, (err, result) => {
        if (err) throw err;
        console.log(result);
      });
      startEmployee();
    })
    .catch((err) => {
      if (err) throw err;
    });
}




//VIEW ALL EMPLOYEES//
function viewEmployees() {
  let sql = "SELECT * FROM employee";
  connection.query(sql, (err, results) => {
    if (err) throw err;
    console.table(results);
    startEmployee();
  }); 
}




// REMOVE EMPLOYEE //
function removeEmployee() {
  connection.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "list",
          message: "Who do you want to remove?",
          name: "removeEmployee",
          choices: function () {
            let employeeArray = [];
            for(let i of results){
              employeeArray.push(`${i.first_name} ${i.last_name}`)
            }
            return employeeArray;
          },
        },
      ])
      .then((answers) => {
        let res = answers.removeEmployee.split(" ")
        let sql = `DELETE FROM employee WHERE first_name = "${res[0]}" AND last_name = "${res[1]}"`;
        connection.query(sql, (err, result) => {
          if (err) throw err;
          console.log(`Employee ${res[0]} ${res[1]} was removed`);
          startEmployee();
        });
        
      })

      .catch((err) => {
        if (err) throw err;
      });
  });
}

function viewByDepartment() {
  inquirer
  .prompt([
    {
      type: "list",
      message: "Which department do you want to search?",
      name: "viewDepartment",
      choices: [
          "Sales Lead",
          "Salesperson",
          "Software Enginner",
          "HR Director",
          "Front Desk"
      ]
    },
  ])
  .then((answers) => {
    console.log(answers.viewDepartment)
    let sql = `SELECT * FROM department WHERE`;
    connection.query(sql, (err, result) => {
      if (err) throw err;
      console.table(result)
      startEmployee();
    });
  })

  .catch((err) => {
    if (err) throw err;
  });
  }