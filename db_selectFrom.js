var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT * FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// con.connect(function(err) {
//   if (err) throw err;
//   con.query("SELECT name, address FROM customers", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//     console.log('row 3: ' + result[5].name);
//   });
// });

con.connect(function(err) {
  if (err) throw err;
  // con.query("SELECT name, address FROM customers", function (err, result, fields) {
  con.query("SELECT * FROM customers", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    console.log(fields);
    // console.log(fields[0].name);
    // console.log(fields[1].name);
    // console.log(fields[2].name);
    // console.log('row 3: ' + result[5].name);
  });
});