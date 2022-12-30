var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "lms"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "create table student (user_name varchar(50),roll_no varchar(20),password  varchar(20),section varchar(10),year varchar(10));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Student Table created");
  });
});