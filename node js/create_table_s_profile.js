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
  var sql = "create table s_profile(s_name varchar(50),s_roll varchar(20) NOT NULL,hostel_name varchar(50),s_phone_no varchar(10),health_issues varchar(200),hostel_room_no varchar(4),warden_phone_no varchar(10),CONSTRAINT s_profile_pk PRIMARY KEY (s_roll));";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Student Profile Table created");
  });
});