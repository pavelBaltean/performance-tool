#Performance Tool

 Performance Tool is web service that would you send http requests to target URL
with the defined polling frequency.
 You could monitor: response time per second in Line Chart
                    http response counts in Pie Chart


Steps to run Performance Tool

1.Create mysql database
  1.1)CREATE DATABASE mybase;
  1.2)CREATE TABLE user(
      id INT NOT NULL AUTO_INCREMENT,
      requestTime VARCHAR(300) NOT NULL,
      url VARCHAR(500) NOT NULL,
      statusMessage INT NOT NULL,
      responseTime INT NOT NULL,
      PRIMARY KEY (id)
      );

2.Run app.js
  2.1)node app

3.Run Performance Tool
  3.1)Open browser
  3.2)Use http://localhost:3000 for open main web paige
  3.3)Paste in URL input your url
      Configure Latency and Duration
  3.4)Click Run button
