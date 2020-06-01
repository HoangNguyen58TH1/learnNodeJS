var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  // var sql = "SELECT * FROM customers LIMIT 10";
  // var sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
  var sql = "SELECT * FROM customers LIMIT 2,5";
  // var sql = "SELECT * FROM customers ";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});