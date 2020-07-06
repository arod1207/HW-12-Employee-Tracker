// adding a new employee into db //

connection.query('INSERT INTO employee (first_name, last_name, role_id'), (err, res) => {
  if (err) throw err;
  console.log("employee added")
}