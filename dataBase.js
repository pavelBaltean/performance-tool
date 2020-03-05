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
    let sql = "TRUNCATE TABLE user;";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table Truncated");
    });
    console.log("Database is connected");
  }
});

function reqOnLinkSaveDB(reqURL){
   request.get({   
     url : reqURL,
     time : true
   },function(err, response){
      let today = new Date();
      let resElapsedTime;
      let resStatusCode;
      let resStatusMessage;
      
      if(err){
        resElapsedTime=0;
        resStatusCode=404;
        resStatusMessage="Not Found";
       }else{
        resElapsedTime= response.elapsedTime;
        resStatusCode=response.statusCode;
        resStatusMessage=response.statusMessage;
       }
     
     
  
     const user=[ today+'',reqURL+"",resStatusCode,resStatusMessage+"",resElapsedTime];
     const sql="INSERT INTO user (requestTime,url,statusCode,statusMessage,responseTime) VALUES (?,?,?,?,?)";
     
     connection.query(sql, user, function(err, results) {
         if(err) console.log(err);
         else {
          console.log('Current time in array: ',today);
          console.log('Request time in ms', resElapsedTime);
          console.log('Status code: ',resStatusCode);
          console.log('Status Message:',resStatusMessage);
           console.log("Data added\n");
          };
     });
   });

}

function truncateDataBase(){
  let sql = "TRUNCATE TABLE user;";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table Truncated");
    });
}


function getDataBase(){
  connection.query('SELECT * FROM user', (err,rows) => {
    if(err) throw err;
  
    console.log(rows[0].url);
    
    // rows.forEach( (row) => {
    //   console.log(`${row.url} lives in ${row.statusMessage}`);
    // });
  });
  }

module.exports={
 reqOnLinkSaveDB,
  getDataBase,
  truncateDataBase
}


// connection.end(function(err) {
//   if (err) {
//     return console.log("Error: " + err.message);
//   }
//   console.log("Connection is closed");
// });