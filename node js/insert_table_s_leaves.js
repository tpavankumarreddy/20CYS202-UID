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
  var sql = "INSERT INTO s_leaves (student_id,leave_from,leave_until,status,reason,applied_to,type_,AN,FN) VALUES ('cys21080','2 Jan','8 Jan','applied','medical appointment','Ramaguru','Medical Leave','afternoon','forenoon');";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});