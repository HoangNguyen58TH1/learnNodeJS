var mysql = require('mysql')

var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  pass: '',
  dbname: 'nodeJsdb'
})

con.connect(function(err){
  if (err) throw err;
  console.log('Connect success');
})

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   con.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("Result: " + result);
//   });
// });