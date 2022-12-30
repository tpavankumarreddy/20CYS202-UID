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
  var sql = "create table class(year varchar(20),section varchar(20),CONSTRAINT class_pk PRIMARY KEY (year,section));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Class Table created");
  });
});