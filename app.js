let express = require("express");
let app = express();
let server = require("http").createServer(app);
let bodyParser = require("body-parser");
let dbWork = require("./dataBase.js");
const mysql = require("mysql2");
//let path = require('path'); for wait html

server.listen(3000);

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/pages/run.html");
});

app.post("/run", urlencodedParser, function(request, response) {
  let url;
  let latency;
  let duration;
  dbWork.truncateDataBase();
  if (!request.body) return response.sendStatus(400);

  url = request.body.url;
  latency = request.body.latency;
  duration = request.body.duration;

  response.sendFile(__dirname + "/pages/wait.html");

  //it is for wait.html
  //response.sendFile(path.join(__dirname, '/public', 'wait.html'), duration);

  console.log("START");
  console.log("");
  console.log(request.body);

  let timerId = setInterval(() => dbWork.reqOnLinkSaveDB(url), latency * 1000);
  setTimeout(() => {
    clearInterval(timerId);
    console.log("STOP");
  }, duration * 1000);
});

app.get("/getDataBase", function(req, res) {
  const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "mybase",
    password: "root"
  });

  connection.connect(function(err) {
    if (err) {
      return console.error("Error: " + err.message);
    } else {
      console.log("Database is connected");
    }
  });

  console.log("getDataBase works");
  connection.query("SELECT * FROM user", (err, rows) => {
    if (err) throw err;
    res.json(rows);
  });
});

app.get("/lineChart", function(req, res) {
  res.sendFile(__dirname + "/pages/lineChart.html");
});

app.get("/pieChart", function(req, res) {
  res.sendFile(__dirname + "/pages/pieChart.html");
});

//http://localhost:3000
