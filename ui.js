let express = require('express');
let app=express();
let server=require('http').createServer(app);
let bodyParser = require('body-parser');
let dbWork=require('./dataBase.js');
const mysql=require("mysql2");

server.listen(3000);

const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/run.html');
  
  });
  
  app.post("/run", urlencodedParser, function (request, response) {
    let url;
    let latency;
    let duration;
    if(!request.body) return response.sendStatus(400);

    console.log("START");
    console.log("");
    console.log(request.body);
  
    url=request.body.url;
    latency=request.body.latency;
    duration=request.body.duration;

    let timerId = setInterval(() =>  dbWork.reqOnLinkSaveDB(url), latency*1000);
  setTimeout(() => { clearInterval(timerId); console.log("STOP");
 }, duration*1000);

 //послать duration в график или он будет получать duration из HTML 
  });

  

app.get('/getDataBase',function(req,res){
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

  console.log("getDataBase works");
  connection.query('SELECT * FROM user', (err,rows) => {
    
    if(err) throw err;

    //console.log(rows[0].responseTime);
    // rows.forEach( (row) => {
    //   let resTime=`${row.responseTime}`;
    //   res.json(resTime);
    //   console.log(resTime);
    // });
    res.json(rows);
  });


});



//http://localhost:3000


