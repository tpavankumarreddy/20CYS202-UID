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
  var sql = "INSERT INTO e_leaves (employee_id,leave_from,leave_until,status,reason,applied_to,AN,FN,type) VALUES ('asd','12','23','34','45','56','afternoon','forenoon','study');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});