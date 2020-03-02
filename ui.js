let express = require('express');
let app=express();
let server=require('http').createServer(app);
let bodyParser = require('body-parser');
const mysql = require("mysql2");
let requestOnLink=require('./fackingWork.js');

server.listen(3000);



//interface start
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/run',function(req,res){
    res.sendFile(__dirname + '/run.html');
  });
  
  app.post("/run", urlencodedParser, function (request, response) {
    let url;
    let latency;
    let duration;
    let stopButton;
    if(!request.body) return response.sendStatus(400);

    console.log("START");
    console.log("");
    console.log(request.body);
  
    url=request.body.url;
    latency=request.body.latency;
    duration=request.body.duration;
    stopButton=request.body.stop;
    console.log(stopButton);
  console.log(typeof stopButton);

// повторить с интервалом 2 секунды

    let timerId = setInterval(() =>  requestOnLink(url), latency*1000);
// остановить вывод через 5 секунд

  setTimeout(() => { clearInterval(timerId); console.log("STOP"); }, duration*1000);
 
   // response.sendFile(__dirname + '/sucRegister.html'); типо график
  });
//interface end

app.get('/graph',function(req,res){
  res.sendFile(__dirname + '/graph.html');
});



//http://localhost:3000


