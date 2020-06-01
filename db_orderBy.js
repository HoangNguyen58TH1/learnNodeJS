var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  // con.query("SELECT * FROM customers ORDER BY address", function (err, result) {
  con.query("SELECT * FROM customers ORDER BY address DESC", function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});