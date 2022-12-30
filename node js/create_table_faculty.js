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
  var sql = "create table faculty (employee_id varchar(20),user_name varchar(50),phone_no varchar(20),password  varchar(20),advisor varchar(10),CONSTRAINT  faculty_pk PRIMARY KEY (employee_id));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});