const request = require('request');
const mysql=require("mysql2");
let express = require('express');
let app=express();



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



//засунуть в отдельный фаил
module.exports=function(reqURL){
   
   request.get({   //сделать только head запрос !!!
     url : reqURL,
     time : true
   },function(err, response){
     console.log('Request time in ms', response.elapsedTime);
     console.log('Status code: ',response.statusCode);
     console.log('Status Message:',response.statusMessage);
     //здесь должен вызываться метод для передачи данных в бд !!!
     

//starttttt
     const user=[ reqURL+"",response.elapsedTime+"",response.statusCode+"",response.statusMessage+""];
     const sql="INSERT INTO user (url,statusCode,statusMessage,responseTime) VALUES (?,?,?,?)";
     
     connection.query(sql, user, function(err, results) {
         if(err) console.log(err);
         else console.log("Data added\n");
     });
     
//enddddddd
   });
 
  
}


