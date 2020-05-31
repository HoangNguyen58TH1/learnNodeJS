var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "INSERT INTO customers (name, address) VALUES ('Company Inc', 'Highway 37')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted" + result.insertId);
  });
});

// con.connect(func1

//Object result
// {
//   fieldCount: 0,
//   affectedRows: 14,
//   insertId: 0,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '\'Records:14  Duplicated: 0  Warnings: 0',
//   protocol41: true,
//   changedRows: 0
// }

// con.connect(function(err) {
//   if (err) throw err;
//   var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("1 record inserted, ID: " + result.insertId);
//   });
// });
