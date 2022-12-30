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
  var sql = "create table department(dept_name varchar(100),staff varchar(20),CONSTRAINT department_pk PRIMARY KEY (dept_name));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Department Table created");
  });
});