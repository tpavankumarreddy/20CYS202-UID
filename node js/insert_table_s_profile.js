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
  var sql = "INSERT INTO s_profile (s_name,s_roll,hostel_name,s_phone_no,health_issues,hostel_room_no,warden_phone_no) VALUES ('Pavan','cb.en.u4cys21080','Agasthya Bhavan',7981991333,'All Well','C209',987456875);";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});