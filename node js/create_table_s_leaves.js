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
  var sql = "create table s_leaves(student_id varchar(20),leave_from varchar(30),leave_until varchar(30),status varchar(100),reason varchar(200),applied_to varchar(100),type_ varchar(30),AN varchar(10),FN varchar(10),CONSTRAINT s_leaves_pk PRIMARY KEY (student_id,leave_from));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
 