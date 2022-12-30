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
  var sql = "create table hod(user_name varchar(50),password varchar(20),employee_id varchar(20) NOT NULL,phone_no varchar(11),CONSTRAINT hod_pk PRIMARY KEY(employee_id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("HOD Table created");
  });
});