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
 

  connection.query("SELECT * FROM user",
  function(err, results, fields) { 
    console.log(err);
    console.log(results); // собственно данные
    //как то надо послать их в <script javascript>
   });
   
   connection.end(function(err) {
  if (err) {
    return console.log("Error: " + err.message);
  }
  console.log("Connection is closed");
});
  
module.export


//http://localhost:3000



//пока не закрываем
// close connection
// connection.end(function(err) {
//   if (err) {
//     return console.log("Error: " + err.message);
//   }
//   console.log("Connection is closed");
// });

