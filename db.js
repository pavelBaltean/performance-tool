const mysql=require("mysql2");



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "mybase",
  password: "root"
});

connection.connect(function(err){
  if (err) {
    return console.error("Error: " + err.message);
  }
  else{
    console.log("Database is connected");
  }
});

const user=["apple.com","200","Ok","125"];
const sql="INSERT INTO websites (url,statusCode,statusMessage,responseTime) VALUES (?,?,?,?)";

connection.query(sql, user, function(err, results) {
    if(err) console.log(err);
    else console.log("Data added");
});

connection.query("SELECT * FROM websites",
  function(err, results, fields) {
    console.log(err);
    console.log(results); // собственно данные
    //console.log(fields); // мета-данные полей (хз зачем нужны)
});

// close connection
connection.end(function(err) {
  if (err) {
    return console.log("Error: " + err.message);
  }
  console.log("Connection is closed");
});

