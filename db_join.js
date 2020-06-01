// // USERS:
// [
//   { id: 1, name: 'John', favorite_product: 154},
//   { id: 2, name: 'Peter', favorite_product: 154},
//   { id: 3, name: 'Amy', favorite_product: 155},
//   { id: 4, name: 'Hannah', favorite_product:},
//   { id: 5, name: 'Michael', favorite_product:}
// ]
// // PRODUCTS
// [
//   { id: 154, name: 'Chocolate Heaven' },
//   { id: 155, name: 'Tasty Lemons' },
//   { id: 156, name: 'Vanilla Dreams' }
// ]
// var sql = `SELECT users.name AS user, products.name AS favorite FROM users JOIN products
//             ON users.favorite_product = products.id`;

// [
//   { user: 'John', favorite: 'Chocolate Heaven' },
//   { user: 'Peter', favorite: 'Chocolate Heaven' },
//   { user: 'Amy', favorite: 'Tasty Lemons' }
// ]
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  // var sql = `SELECT users.name AS user, products.name AS favorite FROM users JOIN products
  //             ON users.favorite_product = products.id`;
  // var sql = `SELECT users.name AS user, products.name AS favorite FROM users LEFT JOIN products
  //             ON users.favorite_product = products.id`;
  var sql = `SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products
              ON users.favorite_product = products.id`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});