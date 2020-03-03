const request = require('request');
const mysql=require("mysql2");
let express = require('express');

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
    // let sql = "CREATE TABLE url (name VARCHAR(255), address VARCHAR(255))";
    // connection.query(sql, function (err, result) {
    //   if (err) throw err;
    //   console.log("Table created");
    // });
    console.log("Database is connected");
  }
});

function reqOnLinkSaveDB(reqURL){
   request.get({   
     url : reqURL,
     time : true
   },function(err, response){
     console.log('Request time in ms', response.elapsedTime);
     console.log('Status code: ',response.statusCode);
     console.log('Status Message:',response.statusMessage);
  
     const user=[ reqURL+"",response.elapsedTime+"",response.statusCode+"",response.statusMessage+""];
     const sql="INSERT INTO user (url,statusCode,statusMessage,responseTime) VALUES (?,?,?,?)";
     
     connection.query(sql, user, function(err, results) {
         if(err) console.log(err);
         else console.log("Data added\n");
     });
   });

}

function getDataBase(){
  connection.query("SELECT * FROM user",
  function(err, results, fields) { 
    console.log(err);
    console.log(results);
   });

  }

module.exports={
 reqOnLinkSaveDB,
  getDataBase
}


// connection.end(function(err) {
//   if (err) {
//     return console.log("Error: " + err.message);
//   }
//   console.log("Connection is closed");
// });