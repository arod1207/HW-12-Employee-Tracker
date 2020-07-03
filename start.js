const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Poorboi22',
    // database : 'my_db'
  });
   
  connection.connect();
   
  connection.query(err => {
    console.log('Connected to mysql');
  });
   
  connection.end();