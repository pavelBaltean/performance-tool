const request = require("request");
const mysql = require("mysql2");

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
    let sql = "TRUNCATE TABLE user;";
    connection.query(sql, function(err, result) {
      if (err) throw err;
      console.log("Table Truncated");
    });
    console.log("Database is connected");
  }
});

function reqOnLinkSaveDB(reqURL) {
  request.get(
    {
      url: reqURL,
      time: true
    },
    function(err, response) {
      let today = new Date();
      let resElapsedTime;
      let resStatusCode;
      let resStatusMessage;

      if (err) {
        resElapsedTime = 0;
        resStatusCode = 404;
        resStatusMessage = "Not Found";
      } else {
        resElapsedTime = response.elapsedTime;
        resStatusCode = response.statusCode;
        resStatusMessage = response.statusMessage;
      }

      const user = [
        today + "",
        reqURL + "",
        resStatusCode,
        resStatusMessage + "",
        resElapsedTime
      ];
      const sql =
        "INSERT INTO user (requestTime,url,statusCode,statusMessage,responseTime) VALUES (?,?,?,?,?)";

      connection.query(sql, user, function(err, results) {
        if (err) console.log(err);
        else {
          console.log("Current Date&Time: ", today);
          console.log("Request time in ms", resElapsedTime);
          console.log("Status code: ", resStatusCode);
          console.log("Status Message:", resStatusMessage);
          console.log("Data added\n");
        }
      });
    }
  );
}

function truncateDataBase() {
  let sql = "TRUNCATE TABLE user;";
  connection.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table Truncated");
  });
}

module.exports = {
  reqOnLinkSaveDB,
  truncateDataBase
};
