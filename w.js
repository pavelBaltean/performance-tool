const request = require('request');
const mysql=require("mysql2");
let express = require('express');
let app=express();

let url ='https://nodejs.dev/making-http-requests-with-nodejs';

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
module.exports=function(reqURL,interval){  //добавить параметры и конвертировать в сек в милисекунды!!!
  let count=0;
  let id = setInterval(reqLink,interval);
  function reqLink(){
    if(count ==3){
      
      clearInterval(id);

       // close connection
     connection.end(function(err) {
      if (err) {
        return console.log("Error: " + err.message);
      }
      console.log("Connection is closed");
    });
     //realy close connection

    }else{
      count++;
   request.get({   //сделать только head запрос !!!
     url : reqURL,
     time : true
   },function(err, response){
     console.log("Count = "+count);
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
  }
}


