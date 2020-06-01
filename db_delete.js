var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  // var sql = "SELECT * FROM customers";
  // var sql = "SELECT * FROM customers WHERE id = '39'";
  var sql = "DELETE FROM customers WHERE id = '39'";
  // var sql = "DELETE FROM customers";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Number of records deleted: " + result.affectedRows);
    // console.log("Number of records deleted: " + result.insertId);
    console.log(result);
  });
});