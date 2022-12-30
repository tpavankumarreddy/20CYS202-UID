var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "lms"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM hod", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
})