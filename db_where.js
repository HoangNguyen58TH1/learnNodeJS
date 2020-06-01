var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers WHERE address = 'Highway 37'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT address, name FROM customers WHERE address LIKE '%16%'", function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
// con.connect(function(err) {
//   if (err) throw err;
//   var mydata = "%16%";
//   var sql = "SELECT * FROM customers WHERE address LIKE" + mysql.escape(mydata);
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });
// con.connect(function(err) {
//   if (err) throw err;
//   var myaddress = "%1%";
//   var sql = "SELECT * FROM customers WHERE address LIKE ?";
//   con.query(sql, [myaddress], function (err, result) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

var name = 'amy';
var adr = '%1%';
var sql = 'SELECT * FROM customers WHERE name = ? OR address LIKE ?';
con.query(sql, [name, adr], function (err, result) {
  if (err) throw err;
  console.log(result);
});